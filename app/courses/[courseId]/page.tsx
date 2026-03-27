import { Metadata } from 'next';
import { getCourseById, coursesData } from '@/data/courses';
import CourseDetailsClient from '@/components/CourseDetailsClient';
import Link from 'next/link';
import { seoConfig } from '@/config/seo';
import { getCurrentBatch } from '@/services/contentfulService';

function formatBatchDate(value: unknown): string | null {
  const asDate =
    value instanceof Date
      ? value
      : typeof value === 'string'
        ? new Date(value)
        : null;

  if (!asDate || Number.isNaN(asDate.getTime())) return null;

  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(asDate);
}

function pickFirstDateField(fields: unknown): string | null {
  if (!fields || typeof fields !== 'object') return null;

  const record = fields as Record<string, unknown>;
  const preferredKeys = [
    'BatchStartDate',
    'nextBatchDate',
    'nextBatchStartDate',
    'batchDate',
    'date',
    'startDate',
  ];

  for (const key of preferredKeys) {
    if (key in record) {
      const formatted = formatBatchDate(record[key]);
      if (formatted) return formatted;
    }
  }

  for (const v of Object.values(record)) {
    const formatted = formatBatchDate(v);
    if (formatted) return formatted;
  }

  return null;
}

interface Props {
  params: Promise<{ courseId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { courseId } = await params;
  const course = getCourseById(courseId);

  if (!course) {
    return {
      title: 'Course Not Found',
    };
  }

  return {
    title: course.title,
    description: course.description,
    openGraph: {
      title: `${course.title} | CareerXP`,
      description: course.description,
      images: [{ url: course.image }],
      url: `${seoConfig.canonical}/courses/${courseId}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${course.title} | CareerXP`,
      description: course.description,
      images: [course.image],
    },
  };
}

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    courseId: course.id,
  }));
}

export default async function CourseDetails({ params }: Props) {
  const { courseId } = await params;
  const course = getCourseById(courseId);
  const batchFields = await getCurrentBatch();
  const nextBatchDate = pickFirstDateField(batchFields);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-display">Course not found</h2>
        <Link href="/" className="text-indigo-600 font-bold hover:underline">Go back home</Link>
      </div>
    );
  }

  return <CourseDetailsClient course={course} nextBatchDate={nextBatchDate ?? undefined} />;
}
