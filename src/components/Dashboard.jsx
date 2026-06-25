export default function Dashboard({ email, name, role, onLogout }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100">
              <svg
                className="w-5 h-5 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          </div>

          <button
            type="button"
            onClick={onLogout}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors cursor-pointer self-start sm:self-auto"
          >
            Log out
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                You&apos;re signed in
              </h2>
              <p className="mt-1 text-gray-500">
                Welcome to your dashboard,{' '}
                <span className="font-medium text-gray-700">{name}</span>
                {' '}({email})
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="rounded-xl bg-indigo-50 border border-indigo-100 p-5">
              <p className="text-sm font-medium text-indigo-600">Status</p>
              <p className="mt-1 text-lg font-semibold text-gray-900">Active</p>
            </div>
            <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-5">
              <p className="text-sm font-medium text-emerald-600">Role</p>
              <p className="mt-1 text-lg font-semibold text-gray-900">{role}</p>
            </div>
            <div className="rounded-xl bg-amber-50 border border-amber-100 p-5">
              <p className="text-sm font-medium text-amber-600">Last login</p>
              <p className="mt-1 text-lg font-semibold text-gray-900">Just now</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
