const FAVORITES_STORAGE_KEY = "footzone_player_favorites";

function getPlayerFavorites() {
    try {
        return JSON.parse(
            localStorage.getItem(FAVORITES_STORAGE_KEY) || "[]"
        );
    } catch {
        return [];
    }
}

function savePlayerFavorites(favorites) {
    localStorage.setItem(
        FAVORITES_STORAGE_KEY,
        JSON.stringify(favorites)
    );
}

function renderFavoritePage() {
    const list = document.getElementById("favoritesList");
    const count = document.getElementById("favoritesCount");

    if (!list) return;

    const favorites = getPlayerFavorites();

    if (count) {
        count.textContent = favorites.length;
    }

    if (favorites.length === 0) {
        list.innerHTML = `
            <div class="favorites-empty">
                <div class="empty-star">☆</div>
                <h2>Aucun joueur favori</h2>
                <p>
                    Ajoute des joueurs avec les étoiles
                    à côté de leurs noms dans les clubs.
                </p>
                <a class="primary-link" href="index.html">
                    Retour à FootZone
                </a>
            </div>
        `;
        return;
    }

    list.innerHTML = favorites.map((player, index) => `
        <article class="favorite-card">
            <div class="favorite-card-star">★</div>

            <div class="favorite-card-info">
                <div class="favorite-club">
                    ${escapeFavoriteHTML(player.clubName || player.clubId || "Club")}
                </div>

                <h2>
                    ${escapeFavoriteHTML(player.name || "Joueur")}
                </h2>

                <p>
                    Numéro : ${escapeFavoriteHTML(player.number ?? "—")}
                    <span>•</span>
                    ${escapeFavoriteHTML(player.position || "Poste non renseigné")}
                </p>

                ${player.nationality ? `
                    <small>
                        ${escapeFavoriteHTML(player.nationality)}
                    </small>
                ` : ""}
            </div>

            <button
                class="favorite-delete"
                type="button"
                data-remove-favorite="${index}">
                Retirer
            </button>
        </article>
    `).join("");
}

function escapeFavoriteHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

document.addEventListener("click", function(event) {
    const button = event.target.closest("[data-remove-favorite]");

    if (!button) return;

    const index = Number(button.dataset.removeFavorite);
    const favorites = getPlayerFavorites();

    if (!Number.isInteger(index) || index < 0 || index >= favorites.length) {
        return;
    }

    favorites.splice(index, 1);
    savePlayerFavorites(favorites);
    renderFavoritePage();
});

document.addEventListener("DOMContentLoaded", renderFavoritePage);
