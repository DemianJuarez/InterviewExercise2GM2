export const Category = (props) => {
  const { categoryIndex, categoryList } = props;
  return (
    <div>
      <h2>{categoryIndex} List </h2>
      <div
        className={`${categoryIndex}Container`}
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {categoryList.map((category) => {
          return (
            <div
              className={`${categoryIndex}Card`}
              key={category.id}
              style={{
                backgroundColor: "red",
                display: "flex",
                padding: "20px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img className="imgCard" src={category.avatar}></img>
              <p className="pCard">{category.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
