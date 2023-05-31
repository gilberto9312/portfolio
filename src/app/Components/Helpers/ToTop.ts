export const scroll = (move: number) => {
    window.scrollBy({ 
        top: move, // could be negative value
        left: 0, 
        behavior: 'smooth' 
      })
  }
