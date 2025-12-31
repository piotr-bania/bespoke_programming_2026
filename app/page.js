import Underlined_Button from '@/components/ui/buttons/Underlined_Button'

export default function Home_Page() {
    return (
        <main className="min-h-[100dvh] flex flex-col items-center justify-between">
            {/* Top Section */}
            <div className="hero_section" />

            {/* Hero Section */}
            <div className="hero_section">
                <h1 className="header_1 opacity-50 text-right row-start-1 row-end-2 col-start-1 col-end-5 md:col-start-1 md:col-end-9 lg:col-start-1 lg:col-end-13 translate-y-[45%]">
                    Restaurant
                </h1>
                <h2 className="header_2 text-right uppercase row-start-2 row-end-3 col-start-1 col-end-5 md:col-start-1 md:col-end-8 lg:col-start-1 lg:col-end-12">
                    websites
                </h2>
                <div className="row-start-3 row-end-4 col-start-1 col-end-4 md:col-start-1 md:col-end-9 lg:col-start-1 lg:col-end-13">
                    <h2 className="header_2 -tracking-[0.05em]">
                        that don’t{' '}
                        <span className="button_font opacity-25 -tracking-[0.075em]">
                            quietly
                        </span>{' '}
                        lose
                    </h2>
                </div>
                <h2 className="header_2 row-start-4 row-end-5 md:row-start-4 md:row-end-6 col-start-1 col-end-5 md:col-start-1 md:col-end-9 lg:col-start-1 lg:col-end-13 -tracking-[0.05em]">
                    bookings
                </h2>
                <div className="row-start-5 row-end-6 md:row-start-4 md:row-end-6 col-start-2 col-end-5 md:col-start-5 md:col-end-8 lg:col-start-8 lg:col-end-12 mt-12">
                    <p className="paragraph text-right">
                        <span className="heading font_medium">
                            Built by someone with 20+ years in hospitality.
                        </span>{' '}
                        Modern websites for London restaurants, with no upfront
                        cost and a simple monthly partnership.
                    </p>
                </div>
            </div>

            {/* CTA Section */}
            <div className="hero_section mb-6">
                <div className="col-start-1 col-end-5 md:col-start-1 md:col-end-9 lg:col-start-1 lg:col-end-13 flex justify-end">
                    <button className="cta_button">
                        Get your monthly estimate
                    </button>
                </div>
            </div>
        </main>
    )
}
