import axios from 'axios';

const getFooterData = async() => {
    let data;
    try {
        await axios.get(`http://backend.mdearth.io:1337/api/footer?populate=*`).then((response) => {
            data = response.data.data;
            console.log("Get header data from services:", data);
          });
    } catch (error) {
        console.log(error);
    }
    return data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getFooterData,
};