const API_URL = 'https://mypro-1-uuqh.onrender.com';


// Get token from localStorage
function getToken() {
  return localStorage.getItem('token');
}

// Set token in localStorage
function setToken(token) {
  localStorage.setItem('token', token);
}

// Remove token from localStorage
function removeToken() {
  localStorage.removeItem('token');
}

// Get user data from localStorage
function getUserData() {
  const userData = localStorage.getItem('userData');
  return userData ? JSON.parse(userData) : null;
}

// Set user data in localStorage
function setUserData(data) {
  localStorage.setItem('userData', JSON.stringify(data));
}

// API call helper
async function apiCall(endpoint, method = 'GET', data = null) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const token = getToken();
  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }

  if (data && method !== 'GET') {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, options);
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Something went wrong');
    }
    
    return result;
  } catch (error) {
    throw error;
  }
}

// Show alert message
function showAlert(message, type = 'success') {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type}`;
  alertDiv.textContent = message;
  
  const container = document.querySelector('.container');
  container.insertBefore(alertDiv, container.firstChild);
  
  setTimeout(() => {
    alertDiv.remove();
  }, 3000);
}

// Logout function
function logout() {
  removeToken();
  localStorage.removeItem('userData');
  window.location.href = '../index.html';
}

// Check authentication
function checkAuth() {
  const token = getToken();
  if (!token) {
    window.location.href = '../index.html';
  }
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString();
}

// Get status badge HTML
function getStatusBadge(status) {
  const statusClass = status.toLowerCase().replace(' ', '');
  return `<span class="status-badge status-${statusClass}">${status}</span>`;
}
