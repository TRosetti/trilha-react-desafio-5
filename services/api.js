
import axios from 'axios';
export const api  = axios.create({
    baseURL: 'https://swbndzzahetuqncheazf.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3Ym5kenphaGV0dXFuY2hlYXpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyMDc1NjAsImV4cCI6MjA1NDc4MzU2MH0.2g-P4gQsgy3XhTbiEITqQXzm-rtq6P35dJbPPBAeRqg",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3Ym5kenphaGV0dXFuY2hlYXpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyMDc1NjAsImV4cCI6MjA1NDc4MzU2MH0.2g-P4gQsgy3XhTbiEITqQXzm-rtq6P35dJbPPBAeRqg"
    }
})