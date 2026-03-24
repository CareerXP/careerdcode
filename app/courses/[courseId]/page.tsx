import { Metadata } from 'next';
import { getCourseById, coursesData } from '@/data/courses';
import CourseDetailsClient from '@/components/CourseDetailsClient';
import Link from 'next/link';
import { seoConfig } from '@/config/seo';

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

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 font-display">Course not found</h2>
        <Link href="/" className="text-indigo-600 font-bold hover:underline">Go back home</Link>
      </div>
    );
  }

  return <CourseDetailsClient course={course} />;
}
