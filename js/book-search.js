// Comprehensive Book Database for Search Functionality
const bookDatabase = [
  // Books from book.html (New Release section)
  {
    id: 1,
    title: "You Are Your Only Limit",
    author: "Larry Brooksr",
    price: "400",
    image: "images/book-1.jpg",
    page: "book.html",
    category: "self-help"
  },
  {
    id: 2,
    title: "101 Essays That Will Change The Way Your Thinks",
    author: "Brianna Wiest",
    price: "350",
    image: "images/book-2.jpg",
    page: "book.html",
    category: "essays"
  },
  {
    id: 3,
    title: "Your Soul Is A River",
    author: "Nikita Gill",
    price: "400",
    image: "images/book-3.jpg",
    page: "book.html",
    category: "poetry"
  },
  {
    id: 4,
    title: "All The Letters I Should Have Sent",
    author: "Raniya Naim",
    price: "390",
    image: "images/book-4.jpg",
    page: "book.html",
    category: "romance"
  },
  {
    id: 5,
    title: "Happy",
    author: "Alex Lemon",
    price: "550",
    image: "images/book-5.jpg",
    page: "book.html",
    category: "self-help"
  },
  {
    id: 6,
    title: "Milk & Honey",
    author: "Rubi Kaur",
    price: "400",
    image: "images/book-6.jpg",
    page: "book.html",
    category: "poetry"
  },
  // Books from book.html (main section)
  {
    id: 7,
    title: "Being Beautiful",
    author: "Helen Gordon",
    price: "450",
    image: "images/b9.jpg",
    page: "book.html",
    category: "self-help"
  },
  {
    id: 8,
    title: "Purpose",
    author: "Samuel wilkinson",
    price: "300",
    image: "images/b8.jpg",
    page: "book.html",
    category: "philosophy"
  },
  {
    id: 9,
    title: "Book",
    author: "Margaret Fuller",
    price: "250",
    image: "images/b7.jpg",
    page: "book.html",
    category: "classic"
  },
  {
    id: 10,
    title: "Worrying",
    author: "Francis O'Gorman",
    price: "700",
    image: "images/b6.jpg",
    page: "book.html",
    category: "psychology"
  },
  {
    id: 11,
    title: "A Journey To Freedom",
    author: "Frank Liu",
    price: "600",
    image: "images/b29.jpg",
    page: "book.html",
    category: "biography"
  },
  {
    id: 12,
    title: "Thousands of miles Away",
    author: "Laranie K.Hart",
    price: "130",
    image: "images/b4.jpg",
    page: "book.html",
    category: "travel"
  },
  {
    id: 13,
    title: "The Other side of Tomorrow",
    author: "Micalea Smeltzer",
    price: "1000",
    image: "images/b3.jpg",
    page: "book.html",
    category: "sci-fi"
  },
  {
    id: 14,
    title: "The blue Umbrella",
    author: "Ruskin Bond",
    price: "710",
    image: "images/b2.jpg",
    page: "book.html",
    category: "regional"
  },
  {
    id: 15,
    title: "Little Spine",
    author: "Jannette Quackenbush",
    price: "680",
    image: "images/b1.jpg",
    page: "book.html",
    category: "fiction"
  },
  
  // Books from book2.html
  {
    id: 16,
    title: "The Art of War",
    author: "Sun Tzu",
    price: "299",
    image: "images/book2-1.jpg",
    page: "book2.html",
    category: "history"
  },
  {
    id: 17,
    title: "Atomic Habits",
    author: "James Clear",
    price: "450",
    image: "images/book2-2.jpg",
    page: "book2.html",
    category: "self-help"
  },
  {
    id: 18,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    price: "380",
    image: "images/book2-3.jpg",
    page: "book2.html",
    category: "philosophy"
  },
  {
    id: 19,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: "520",
    image: "images/book2-4.jpg",
    page: "book2.html",
    category: "history"
  },
  {
    id: 20,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: "350",
    image: "images/book2-5.jpg",
    page: "book2.html",
    category: "business"
  },
  {
    id: 21,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "320",
    image: "images/book2-6.jpg",
    page: "book2.html",
    category: "fiction"
  },
  {
    id: 22,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: "400",
    image: "images/book2-7.jpg",
    page: "book2.html",
    category: "business"
  },
  {
    id: 23,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen Covey",
    price: "480",
    image: "images/book2-8.jpg",
    page: "book2.html",
    category: "self-help"
  },
  {
    id: 24,
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    price: "360",
    image: "images/book2-9.jpg",
    page: "book2.html",
    category: "self-help"
  },
  
  // Books from book3.html
  {
    id: 25,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "280",
    image: "images/book3-1.jpg",
    page: "book3.html",
    category: "classic"
  },
  {
    id: 26,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "320",
    image: "images/book3-2.jpg",
    page: "book3.html",
    category: "classic"
  },
  {
    id: 27,
    title: "1984",
    author: "George Orwell",
    price: "300",
    image: "images/book3-3.jpg",
    page: "book3.html",
    category: "sci-fi"
  },
  {
    id: 28,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: "290",
    image: "images/book3-4.jpg",
    page: "book3.html",
    category: "romance"
  },
  {
    id: 29,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: "310",
    image: "images/book3-5.jpg",
    page: "book3.html",
    category: "fiction"
  },
  {
    id: 30,
    title: "Lord of the Flies",
    author: "William Golding",
    price: "270",
    image: "images/book3-6.jpg",
    page: "book3.html",
    category: "fiction"
  },
  {
    id: 31,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: "420",
    image: "images/book3-7.jpg",
    page: "book3.html",
    category: "fantasy"
  },
  {
    id: 32,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    price: "380",
    image: "images/book3-8.jpg",
    page: "book3.html",
    category: "fantasy"
  },
  {
    id: 33,
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    price: "450",
    image: "images/book3-9.jpg",
    page: "book3.html",
    category: "fantasy"
  }
];

// Search functionality
function searchBooks(query, category = '') {
  if (!query && !category) return [];
  
  const searchTerm = query.toLowerCase().trim();
  
  return bookDatabase.filter(book => {
    const matchesQuery = !query || 
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm) ||
      book.category.toLowerCase().includes(searchTerm);
    
    const matchesCategory = !category || book.category === category;
    
    return matchesQuery && matchesCategory;
  });
}

// Get books by category
function getBooksByCategory(category) {
  return bookDatabase.filter(book => book.category === category);
}

// Get all categories
function getAllCategories() {
  const categories = [...new Set(bookDatabase.map(book => book.category))];
  return categories.sort();
}

// Generate book HTML
function generateBookHTML(book) {
  return `
    <div class="col-md-6 col-lg-4 d-flex">
      <div class="book-wrap d-lg-flex">
        <div class="img d-flex justify-content-end" style="background-image: url(${book.image});">
          <div class="in-text">
            <a href="#" class="icon d-flex align-items-center justify-content-center add-to-cart" data-toggle="tooltip" data-placement="left" title="Add to cart">
              <span class="flaticon-shopping-cart"></span>
            </a>
            <a href="#" class="icon d-flex align-items-center justify-content-center add-to-wishlist" data-toggle="tooltip" data-placement="left" title="Add to Wishlist">
              <span class="flaticon-heart-1"></span>
            </a>
          </div>
        </div>
        <div class="text p-4">
          <p class="mb-2"><span class="price">₹${book.price}</span></p>
          <h2><a href="${book.page}">${book.title}</a></h2>
          <span class="position">${book.author}</span>
          <p class="category mt-2"><small class="text-muted">Category: ${book.category}</small></p>
        </div>
      </div>
    </div>
  `;
}

// Initialize search functionality
function initializeSearch() {
  const searchForm = document.querySelector('.searchform');
  const searchInput = searchForm?.querySelector('input[type="text"]');
  const categoryFilter = document.getElementById('book-filter');
  
  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const query = searchInput.value.trim();
      const category = categoryFilter?.value || '';
      
      if (query || category) {
        // Store search parameters and redirect to search results
        localStorage.setItem('searchQuery', query);
        localStorage.setItem('searchCategory', category);
        window.location.href = 'search-results.html';
      }
    });
  }
  
  // Category filter change
  if (categoryFilter) {
    categoryFilter.addEventListener('change', function() {
      const query = searchInput?.value.trim() || '';
      const category = this.value;
      
      if (category) {
        localStorage.setItem('searchQuery', query);
        localStorage.setItem('searchCategory', category);
        window.location.href = 'search-results.html';
      }
    });
  }
}

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    bookDatabase,
    searchBooks,
    getBooksByCategory,
    getAllCategories,
    generateBookHTML,
    initializeSearch
  };
}
