export const searchPost = async (column, param) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search`, {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                column: column,
                param: param
            })
        });
        return res.json();
    } catch (error) {
        return error;
    }
}

export const columnsGet = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/columns`, {
            method: "GET",
            cache: "no-cache"
        });
        return res.json();
    } catch (error) {
        return error;
    }
}

export const soccerTestGet = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/test/${id}`,
            {
                method: "GET",
                cache: "no-cache"
            });
        return res.json();
    } catch (error) {
        return error;
    }
}

export const searchTest = async (type, param) => {
    try {
        const query = `?type=${type}&param=${param}`;
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search${query}`,
            {
                method: "GET",
                cache: "no-cache"
            });
        return res.json();
    } catch (error) {
        return error;
    }
}