import Item from "../Item/item";

const ItemCards = ({ course }) => {
  return (
    <>
      <section className="cards">
        {course.length > 0 &&
          course.map((courses) => {
            return <Item key={courses.id} courses={courses} />;
          })}
      </section>
    </>
  );
};

export default ItemCards;
