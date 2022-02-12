function Home({ contentPosition }) {
  const sidebarWidth = contentPosition.sidebarWidth;
  return (
    <div
      className="render-rich-container"
      style={{ marginLeft: `${sidebarWidth}px` }}
    >
      <h1>Home Component</h1>
    </div>
  );
}

export default Home;
