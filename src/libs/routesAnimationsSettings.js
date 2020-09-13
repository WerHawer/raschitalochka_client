export const mapStyles = (styles) => ({
  opacity: styles.opacity,
  transition: `all linear ${styles.transition}ms`,
});

export const bounceTransition = {
  atEnter: {
    opacity: 0,
    transition: 100,
  },
  atLeave: {
    opacity: 0,
    transition: 100,
  },
  atActive: {
    opacity: 1,
    transition: 100,
  },
};
