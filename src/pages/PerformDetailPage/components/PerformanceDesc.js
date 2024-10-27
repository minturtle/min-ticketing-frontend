import Markdown from "react-markdown"


function PerformanceDesc({ description }) {
    return (
        <div className="mt-10">
            <Markdown className="prose prose-invert max-w-none">
                {description}
            </Markdown>
        </div>
    )
}


export default PerformanceDesc