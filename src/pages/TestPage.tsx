import { Link } from 'react-router-dom';

export default function TestPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
      <div className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-md w-full">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Routing Test Page</h1>
        <p className="text-slate-600 mb-8">
          If you can see this page, routing is working correctly! This is a blank test page.
        </p>
        <Link 
          to="/" 
          className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
