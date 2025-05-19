export function Footer() {
  return (
      <footer className="page-footer light-blue lighten-2">
          <div className="footer-copyright">
              <div className="container">
                  © {new Date().getFullYear()} Разработчик: Шмаров Андрей РТУ МИРЭА ТКБО-01-23
                  <a className="grey-text text-lighten-4 right" href="#!">
                      Repository
                  </a>
              </div>
          </div>
      </footer>
  );
}
