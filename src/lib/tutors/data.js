export const fetchTutors = async ({
  search = "",
  startDate = "",
  endDate = "",
}) => {

  const params = new URLSearchParams();

  if (search) {
    params.append("search", search);
  }

  if (startDate) {
    params.append("startDate", startDate);
  }

  if (endDate) {
    params.append("endDate", endDate);
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tutors?${params.toString()}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
};
export const fetchBestTutors = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`);

  const data = res.json();
  return data || [];
};