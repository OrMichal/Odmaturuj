import { useQuery } from "@tanstack/react-query";


export default function({ era }){
    const {data: QuestionQuery, isLoading: QuestionLoading} = useQuery({
        queryKey: ["question"],
        queryFn: () => fetch()
            .then(resp => resp.json())
            .catch(err => console.error(err))
    });
}