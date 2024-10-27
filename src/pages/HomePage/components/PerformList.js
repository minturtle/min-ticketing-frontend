import PerformCard from "./PerformCard"

function PerformList() {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-16">
            <PerformCard />
        </section>
    )
}

export default PerformList