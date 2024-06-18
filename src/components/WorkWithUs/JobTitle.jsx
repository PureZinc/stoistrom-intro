export default function JobTitle(params) {
    const isOpen = params.isOpen;
    const setIsOpen = params.setIsOpen;
    const jobDetail = params.jobDetail;

  return (
    <div className={`main-modal ${isOpen ? 'flex' : 'hidden'}`}>
        <div class="modal-container">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg main-font-sm">Title: {jobDetail.title}</h2>
                <button className="x-close" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <p>{jobDetail.longDescription}</p>
            <p>Positions: {jobDetail.positions}</p>
            <div className="mt-6 flex justify-end">
                <button className="main-button">Feature Coming Soon</button>
            </div>
        </div>
    </div>
  )
}
