export const fetchTutors = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors`);

  const data = res.json();
  return data || [];
};
export const fetchBestTutors = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`);

  const data = res.json();
  return data || [];
};