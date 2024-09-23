// Function to copy item details to clipboard
function copyItemDetails(itemName, itemURL) {
    const copyText = `${itemName}: ${itemURL}`;
    navigator.clipboard.writeText(copyText).then(() => {
        alert('Item details copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// Example usage:
// copyItemDetails('Creepy Pumpkin Mug', 'https://example.com/creepy-pumpkin-mug');
