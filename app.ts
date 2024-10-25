// Hiển thị thông báo khi người dùng nhấn vào nút "Mua Ngay"
const allBuyButtons = document.querySelectorAll<HTMLButtonElement>('.buy-button'); // Chọn tất cả các nút "Mua Ngay"

allBuyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        alert('Hàng đã hết, vui lòng quay lại sau!'); // Hiển thị thông báo khi nhấn
    });
});

// Xác thực đơn giản cho form (ví dụ, yêu cầu người dùng nhập email khi liên hệ)
const contactForm = document.querySelector<HTMLFormElement>('#contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        const emailInput = document.querySelector<HTMLInputElement>('#email');

        if (emailInput && !emailInput.value) {
            alert('Vui lòng nhập địa chỉ email.');
            event.preventDefault(); // Ngăn việc gửi form nếu chưa có email
        }
    });
}

// Thêm hiệu ứng hover động cho các sản phẩm
const productItems = document.querySelectorAll<HTMLDivElement>('.product-item');

productItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.classList.add('hover-effect');
    });

    item.addEventListener('mouseout', () => {
        item.classList.remove('hover-effect');
    });
});

// Hiển thị toast notification khi nhấn vào liên hệ email
const contactLinks = document.querySelectorAll<HTMLAnchorElement>('.footer-column a[href^="mailto:"]');

contactLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        showToast('Đang mở email...');
    });
});

// Hàm hiển thị thông báo dạng toast
const showToast = (message: string): void => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
};