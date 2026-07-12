import Layout from "./Layout";

export default function LandingPage() {
  return (
    <>
      <Layout>
        <div className="flex justify-between">
          <h1 className="text-2xl font-black tracking-tight text-white">
            AI FlashCard Generator
          </h1>
          <div className="flex items-center gap-4">
            <button className="bg-blue-400 text-amber-200 p-2 border hover:bg-amber-100 hover:text-blue-500 border-white rounded-lg text-sm font-medium transition-all cursor-pointer">
              Login
            </button>
            <button className="bg-green-400 text-pink-600 p-2 border hover:bg-pink-400 hover:text-green-300 border-white rounded-lg text-sm font-semibold transition-all shadow-amber-50 cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
        <div className="w-full min-h-[50vh] flex flex-col justify-center items-center gap-4 mt-20 text-center">
          <p className="text-5xl font-bold uppercase text-violet-500 text-center">
            Turn any notes into flashcards
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            Paste text or upload a PDF. Get a ready to study deck in seconds.
          </p>
          <div className="pt-4">
            <button className="bg-white text-slate-950 hover:bg-slate-200 px-6 py-3 rounded-xl font-bold text-base shadow-lg transition-all cursor-pointer">Get Started</button>
          </div>
        </div>
      </Layout>
    </>
  );
}
