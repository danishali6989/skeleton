const renderResponse = (url, response) => {
    if (response) {

        switch (response.status) {
            case 200: {
                return response.json().catch((err) => {
                    return err.message;
                });
            }
            case 400:
            return response.json().catch((err) => {
                return err.message;
            });
            default:
                throw new Error(
                    `[API error] Got status ${response.status} from ${url}`,
                );
        }
    }
};

const getid = async (url, id, token) => {

    return fetch(
        url,
        {
            method: 'GETID',
            headers: {
                CompanyId: 0,
                Accept: 'application/json',
                "Content-Type": "application/json",
                "Authorization": token ? `Bearer ${token}` : ''
            },
            body: id ? JSON.stringify(id) : null,

        },
    )
        .then((response) => {
            return renderResponse(url, response);
        })
        .catch((resp) => {
            console.log(resp);
            return Promise.reject();

        });
};

const get = async (url, token,userid) => {

    return fetch(
        url,
        {
            method: 'GET',
            headers: {
                CompanyId: 1,
                Accept: 'application/json',
                "Content-Type": "application/json",
                "Authorization": token ? `Bearer ${token}` : ''
            },
            body: userid ? JSON.stringify(userid) : null,
        },
    )
        .then((response) => {
            return renderResponse(url, response);
        })
        .catch((resp) => {
            return Promise.reject();

        });
};

const post = async (url,data) => {
    return fetch(
        url, {
        method: 'POST',
        headers: {
            CompanyId: 1,
             Accept: 'application/json',
            "Content-Type": "application/json",
        },
        body: data ? JSON.stringify(data) : null,
    },
    )
        .then((response) => renderResponse(url, response))
        .catch((resp) => {
            console.log("resp", resp);
            return Promise.reject();
        });
};

const delte = async (url) => {
    return fetch(
        url, {
        method: 'POST',
        headers: {
            CompanyId: 0,
            Accept: 'application/json',
            "Content-Type": "application/json",
        },
    },
    )
        .then((response) => renderResponse(url, response))
        .catch((resp) => {
            return Promise.reject();
        });
};
export { post, get, delte,getid };