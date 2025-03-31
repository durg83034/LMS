document.addEventListener('DOMContentLoaded', function() {
    // Sample seat data
    const seats = [
        { id: 'A1', capacity: 1, status: 'available', location: 'Quiet Zone' },
        { id: 'A2', capacity: 1, status: 'occupied', location: 'Quiet Zone' },
        { id: 'B1', capacity: 2, status: 'available', location: 'Group Study' },
        { id: 'B2', capacity: 2, status: 'reserved', location: 'Group Study' },
        { id: 'C1', capacity: 4, status: 'available', location: 'Collaboration Zone' },
        { id: 'C2', capacity: 4, status: 'available', location: 'Collaboration Zone' },
        { id: 'D1', capacity: 1, status: 'available', location: 'Reading Area' },
        { id: 'D2', capacity: 1, status: 'occupied', location: 'Reading Area' },
    ];

    const floorPlan = document.getElementById('floorPlan');
    const refreshBtn = document.getElementById('refreshBtn');
    const capacityFilter = document.getElementById('capacityFilter');

    // Render seats based on filter
    function renderSeats(filter = 'all') {
        floorPlan.innerHTML = '';
        const filteredSeats = filter === 'all' ? seats : seats.filter(seat => seat.capacity == filter);

        filteredSeats.forEach(seat => {
            const seatElement = document.createElement('div');
            seatElement.className = 'seat';
            seatElement.innerHTML = `
                <div class="seat-number">Seat ${seat.id}</div>
                <div class="seat-capacity">Capacity: ${seat.capacity}</div>
                <div class="seat-location">${seat.location}</div>
                <div class="seat-status ${seat.status}">${seat.status.toUpperCase()}</div>
            `;

            if (seat.status === 'available') {
                seatElement.addEventListener('click', () => {
                    alert(`Seat ${seat.id} selected!`);
                });
                seatElement.style.cursor = 'pointer';
            }

            floorPlan.appendChild(seatElement);
        });
    }

    // Initial render
    renderSeats();

    // Event listeners
    refreshBtn.addEventListener('click', () => {
        alert('Refreshing seat availability...');
        renderSeats(capacityFilter.value);
    });

    capacityFilter.addEventListener('change', () => {
        renderSeats(capacityFilter.value);
    });
});