import PracticeQuestion from "../Practice-question/practice-question";


export default function PracticeContent({ selectedEra }){
    return(
        
        <PracticeQuestion era={selectedEra} />
    );
}