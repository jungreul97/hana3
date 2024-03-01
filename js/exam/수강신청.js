document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const selectedCourses = document.getElementById('selected_courses');
      if (button.disabled) {
        Array.from(selectedCourses.children).forEach(child => {
          if (child.id === 'selected_' + button.id) {
            selectedCourses.removeChild(child);
          }
        });
        button.disabled = false;
      } else {
        const course = document.createElement('p');
        course.textContent = button.textContent;
        course.id = 'selected_' + button.id;
        course.addEventListener('click', () => {
          selectedCourses.removeChild(course);
          button.disabled = false;
        });
        selectedCourses.appendChild(course);
        button.disabled = true;
      }
    });
  });
  