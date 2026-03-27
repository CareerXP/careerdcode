import { getStudentReviews } from "@/services/contentfulService";
import StudentReviewsClient from "./StudentReviewsClient";

interface StudentReviewsProps {
  animate?: boolean;
}

export default async function StudentReviews({ animate = true }: StudentReviewsProps) {
  const reviews = await getStudentReviews();

  return <StudentReviewsClient reviews={reviews} animate={animate} />;
}
