import PracticeQuestion from "../Practice-question/practice-question";


export default function PracticeContent({ selectedEraId }){
    return(
        <PracticeQuestion eraId={selectedEraId} />
    );
}