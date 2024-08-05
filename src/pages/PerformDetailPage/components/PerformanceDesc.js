import Markdown from "react-markdown"


function PerformanceDesc({ description }) {
    return (
        <div class="performance-description">
            <Markdown>
                {description}
            </Markdown>
        </div>
    )
}


export default PerformanceDesc