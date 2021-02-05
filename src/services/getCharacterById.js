export const getCharacterById = () => {
    fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`)
        .then(res => res.json())
};
