export const searchPost = async (column,param) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search`, {
            method: "POST",
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
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/columns`);
        return res.json();
    } catch (error) {
        return error;
    }
}

export const soccerTestGet = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/test/${id}`);
        return res.json();
    } catch (error) {
        return error;
    }
}