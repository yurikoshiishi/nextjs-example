export async function fetcher<T>(path: string) {
  const res = await fetch(path);
  return res.json() as Promise<T>;
}

export async function postFetcher<T>(path: string, data: any) {
  const res = await fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return res.json() as Promise<T>;
}
