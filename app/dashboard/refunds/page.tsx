export default function RefundsPage() {
    return (
        <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8 w-full max-w-6xl mx-auto">
            <div>
                <h1 className="text-3xl font-serif font-bold tracking-wide text-foreground">Refunds</h1>
                <p className="text-muted-foreground mt-1 text-sm">Process and track customer returns and refunds.</p>
            </div>

            <div className="rounded-xl border border-border bg-card h-96 flex flex-col items-center justify-center p-8 text-center mt-4">
                <h2 className="text-xl font-medium mb-2">Coming Soon</h2>
                <p className="text-muted-foreground max-w-md">The refunds processing view will be implemented here when the real API endpoints are connected.</p>
            </div>
        </div>
    )
}
