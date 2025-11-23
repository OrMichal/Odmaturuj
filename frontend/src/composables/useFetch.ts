import {ref, type Ref} from "vue";

type FetchResponse<T> = {
   data: Ref<T | null>;
   loading: Ref<boolean>;
   error: Ref<string | null>;
}
export function useFetch<T>(url: string, key: string, reqOpts?: RequestInit): FetchResponse<T> {
  key.length;

  const loading: Ref<boolean> = ref<boolean>(true);
  const data: Ref<T | null> = ref(null);
  const error: Ref<string | null> = ref<string | null>(null);

  const fetchData = async () => {
    try{
      const resp = await fetch(url, reqOpts || {
        headers: {
          "Content-Type": "application/json"
        }
      });

      data.value = await resp.json();
    } catch(err) {
      error.value = `HTTP fetch error: ${err}`
    } finally {
      loading.value = false;
    }
  };

  fetchData();

  return { data, loading, error };
}
