import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import type { Document } from '@contentful/rich-text-types';
import { contentfulClient } from '@/lib/contentful';

function reviewTextFromCaption(caption: unknown): string {
  if (caption == null || caption === '') {
    return 'No review provided.';
  }
  if (typeof caption === 'string') {
    return caption;
  }
  if (
    typeof caption === 'object' &&
    caption !== null &&
    'nodeType' in caption &&
    (caption as { nodeType: string }).nodeType === 'document'
  ) {
    const text = documentToPlainTextString(caption as Document);
    return text.trim() || 'No review provided.';
  }
  return 'No review provided.';
}

export interface StudentReview {
  name: string;
  role: string;
  image: string;
  review: string;
}

const mockReviews: StudentReview[] = [
  {
    name: "John Doe",
    role: "Full Stack Developer",
    image: "https://picsum.photos/seed/john/100/100",
    review: "The course was incredibly well-structured and the mentors were always available to help.",
  },
  {
    name: "Jane Smith",
    role: "UX Designer",
    image: "https://picsum.photos/seed/jane/100/100",
    review: "I learned so much in such a short period of time. The projects were challenging and rewarding.",
  },
  {
    name: "Bob Johnson",
    role: "Data Scientist",
    image: "https://picsum.photos/seed/bob/100/100",
    review: "The career support was exceptional. They helped me land my dream job in tech.",
  },
];

export async function getStudentReviews(): Promise<StudentReview[]> {
  if (!contentfulClient) {
    return mockReviews;
  }

  try {
    const spaceId = process.env.CONTENTFUL_SPACE_ID;
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
    console.log(`Fetching entries from Contentful Space: ${spaceId} using token: ${accessToken?.slice(0, 4)}...${accessToken?.slice(-4)}`);

    const response = await contentfulClient.getEntries({
      content_type: 'studentReviews',
    });

    console.log(response);

    if (!response.items || response.items.length === 0) {
      return mockReviews;
    }

    return response.items.map((item: any) => ({
      name: item.fields.name || 'Anonymous',
      role: item.fields.position || 'Student',
      image: item.fields.image?.fields?.file?.url 
        ? `https:${item.fields.image.fields.file.url}` 
        : `https://picsum.photos/seed/${item.sys.id}/100/100`,
      review: reviewTextFromCaption(item.fields.caption),
    }));
  } catch (error: any) {
    if (error.status === 401) {
      console.error('Contentful Error: Unauthorized (401). The access token you sent could not be found or is invalid.');
      console.error('To fix this:');
      console.error('1. Go to your Contentful Space > Settings > API keys.');
      console.error('2. Select your API key (or create a new one).');
      console.error('3. Copy the "Content Delivery API - access token" (NOT the Management or Preview token).');
      console.error('4. Update your CONTENTFUL_ACCESS_TOKEN secret in AI Studio.');
    } else if (error.status === 404) {
      console.warn('Contentful Warning: Content type "studentReview" not found. Please ensure you have created a content model with ID "studentReview". Falling back to mock data.');
    } else {
      console.error('Error fetching reviews from Contentful:', error.message || error);
    }
    return mockReviews;
  }
}

export async function getCurrentBatch(){
  if (!contentfulClient) {
    return null;
  }

  try {
    const response = await contentfulClient.getEntries({
      content_type: 'carrerXBatch',
    });
    if (!response.items || response.items.length === 0) {
      return null;
    }
    return response.items[0].fields;
  } catch (error: any) {
    console.error('Error fetching current batch from Contentful:', error.message || error);
    return null;
  }
}