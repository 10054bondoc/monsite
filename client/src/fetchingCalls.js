export const fetchSomething = async (collection, qstring, restmethod) => {
  const res = await fetch(`${"MYURL"}/${collection}${qstring}`, {
    method: restmethod,
    redirect: "follow",
    credentials: "include",
  });
  const data = await res.json();
  // console.log("query string" + qstring);
  console.log(data);
  if (res.ok) {
    return data;
  } else {
    throw new Error(data);
  }
};
