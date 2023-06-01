export const get = async (url, token) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from ${url}");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const patch = async (url, token, body = null) => {
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: body,
    });

    if (!response.ok) {
      throw new Error("Failed to update data from ${url}");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const post = async (url, token, body = null) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: body,
    });

    if (!response.ok) {
      throw new Error("Failed to update data from ${url}");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
