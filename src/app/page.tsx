import ArtSubmissionForm from '@/components/forms/ArtSubmissionForm';
import OCApplicationForm from '@/components/forms/OCApplicationForm';
import EventCalendar from '@/components/EventCalendar';
import GalleryGrid from '@/components/GalleryGrid';
import FeedbackForm from '@/components/forms/FeedbackForm';
import AdminDashboard from '@/components/admin/AdminDashboard';

export default function Home() {
  return (
    <main className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">ArtFelt Club</h1>
      <ArtSubmissionForm />
      <OCApplicationForm />
      <EventCalendar />
      <GalleryGrid />
      <FeedbackForm />
      <AdminDashboard role="admin" />
    </main>
  );
}
