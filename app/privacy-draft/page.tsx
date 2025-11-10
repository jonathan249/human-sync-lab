export default function PrivacyDraftPage() {
    return (
        <div className="px-4 lg:px-0 py-12 max-w-xl mx-auto space-y-4">
            <h1 className="font-semibold text-xl">Privacy Statement — Draft Project</h1>

            <p className="text-sm text-gray-600">Last updated: 10.11.2025</p>
            <section aria-labelledby="privacy-draft-summary">
                <h2 id="privacy-draft-summary" className="mb-2 font-medium">Privacy summary:</h2>

                <div className="space-y-3">
                    <p>
                        This project is currently in development. If granted Garmin Connect
                        Developer access, all user data will be handled in compliance with
                        GDPR and other applicable privacy laws.
                    </p>

                    <p>No personal data is collected, stored, or processed at this time.</p>

                    <p>
                        Any future access to data will occur only with explicit user consent
                        via Garmin&apos;s authorization system. A full privacy policy will be
                        published prior to any public release or before data collection
                        begins.
                    </p>
                </div>
            </section>
        </div>
    );
}
