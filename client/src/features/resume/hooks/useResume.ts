import { useQuery } from "@tanstack/react-query";
import { resumeApi } from "../api/resumeApi";

export function useResume() {
  return useQuery({
    queryKey: ["resume", "active"],
    queryFn: resumeApi.getActive,
  });
}
