// export const getPoetry = async () => {
//     try {
//         const response = await fetch("https://v1.jinrishici.com/all.json");
//         const data = await response.json();
//         return [data.origin, data.author, data.content];
//     } catch (e) {
//         return new Error('request failed');
//     }
// }

export const getPoetry = () => {
    return fetch("https://v1.jinrishici.com/all.json", 'GET')
    .then(response => response.json())
    .then(data => [data.origin, data.author, data.content])
    .catch(err => new Error(err));
}