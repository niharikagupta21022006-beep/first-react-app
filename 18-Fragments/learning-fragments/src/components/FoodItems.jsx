const foodItems = () => {
  let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <ul class="list-group">
      {foodItems.map((item) => (
        <li key={item} class="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default foodItems;
