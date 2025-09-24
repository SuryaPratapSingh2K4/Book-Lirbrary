export const handleDownload = (data) => {
    const header = ["Title", "Author", "Genre", "PublishedYear", "ISBN"];
    const rows = data.map((b) => [
        b.Title,
        b.Author,
        b.Genre,
        b.PublishedYear,
        b.ISBN
    ])

    const csvContent = [header,...rows].map((r) => r.join(",")).join("\n");

    const blob = new Blob([csvContent],{type: "text/csv"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;

    const timestamp = new Date().getTime();
    a.download = `books_edited_${timestamp}.csv`;

    a.click();
    URL.revokeObjectURL(url);
}
