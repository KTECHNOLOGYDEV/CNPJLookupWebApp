import { FormEvent, SVGProps, useState } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
      <path d="m16 16 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BuildingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 20V7.5L12 4v16M12 9h8v11M8 9v.01M8 13v.01M8 17v.01M16 13v.01M16 17v.01M2 20h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="m7 12.5 3.2 3L17.5 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CopyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="8" y="8" width="10" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M15 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 3 5 6v5c0 4.6 2.9 8 7 10 4.1-2 7-5.4 7-10V6l-7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function UsersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.5 19v-1.5A4.5 4.5 0 0 1 8 13h2a4.5 4.5 0 0 1 4.5 4.5V19M15 5.5a3 3 0 0 1 0 5.8M16.5 14a4 4 0 0 1 4 4v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function formatCnpj(value: string) {
  return value
    .replace(/\D/g, "")
    .slice(0, 14)
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}

function isValidCnpj(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.length !== 14 || /^(\d)\1+$/.test(digits)) return false;

  const calculateDigit = (base: string, weights: number[]) => {
    const total = base.split("").reduce((sum, digit, index) => sum + Number(digit) * weights[index], 0);
    const remainder = total % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const first = calculateDigit(digits.slice(0, 12), [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  const second = calculateDigit(digits.slice(0, 12) + first, [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
  return digits.endsWith(`${first}${second}`);
}

const company = {
  name: "Open Knowledge Brasil",
  tradeName: "Rede pelo Conhecimento Livre",
  cnpj: "19.131.243/0001-97",
  opened: "03/10/2013",
  type: "Matriz",
  size: "Demais",
  nature: "Associação Privada",
  capital: "R$ 0,00",
  registration: "Regular",
  activity: "Atividades de associações de defesa de direitos sociais",
  activityCode: "94.30-8-00",
  address: "Avenida Paulista, 37, 4º andar",
  neighborhood: "Bela Vista",
  city: "São Paulo",
  state: "SP",
  zipCode: "01311-902",
  phone: "(11) 2385-1939",
  email: "Não informado",
  secondaryActivities: [
    ["94.93-6-00", "Atividades de organizações associativas ligadas à cultura e à arte"],
    ["94.99-5-00", "Atividades associativas não especificadas anteriormente"],
    ["85.99-6-99", "Outras atividades de ensino não especificadas anteriormente"],
    ["82.30-0-01", "Serviços de organização de feiras, congressos, exposições e festas"],
    ["62.04-0-00", "Consultoria em tecnologia da informação"],
  ],
  partner: {
    name: "Haydee Svab",
    role: "Presidente",
    document: "***112108**",
    ageRange: "Entre 41 a 50 anos",
    entryDate: "27/02/2024",
  },
  taxYears: [2017, 2018, 2019, 2020, 2021, 2022, 2023],
};

export default function App() {
  const [query, setQuery] = useState(company.cnpj);
  const [searchedCnpj, setSearchedCnpj] = useState(company.cnpj);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [resultKey, setResultKey] = useState(0);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!isValidCnpj(query)) {
      setError("CNPJ inválido. Revise os números e tente novamente.");
      return;
    }
    setError("");
    setIsSearching(true);
    window.setTimeout(() => {
      setSearchedCnpj(query);
      setResultKey((current) => current + 1);
      setIsSearching(false);
    }, 650);
  }

  async function copyCnpj() {
    await navigator.clipboard?.writeText(searchedCnpj);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#" aria-label="CNPJ Já — página inicial">
          <span className="brand-mark"><span /></span>
          <span>cnpj<span className="brand-accent">já</span></span>
        </a>
        <nav className="nav-links" aria-label="Navegação principal">
          <a href="#consulta">Consultar</a>
          <a href="#sobre">Sobre os dados</a>
        </nav>
      </header>

      <section className="hero" id="consulta">
        <div className="floating-shape floating-shape-one" aria-hidden="true"><span /></div>
        <div className="floating-shape floating-shape-two" aria-hidden="true"><span /></div>
        <div className="eyebrow"><span /> Inteligência cadastral brasileira</div>
        <h1>Decisões seguras começam<br />com <em>dados confiáveis.</em></h1>
        <p className="hero-copy">
          Acesse informações oficiais de qualquer empresa brasileira em uma experiência rápida, clara e segura.
        </p>

        <form className="search-card" onSubmit={handleSubmit}>
          <div className="search-label-row">
            <label htmlFor="cnpj">CNPJ da empresa</label>
            <span><ShieldIcon /> Consulta segura</span>
          </div>
          <div className={`search-field ${error ? "has-error" : ""}`}>
            <SearchIcon className="search-icon" />
            <input
              id="cnpj"
              inputMode="numeric"
              value={query}
              onChange={(event) => setQuery(formatCnpj(event.target.value))}
              placeholder="00.000.000/0000-00"
              aria-describedby={error ? "cnpj-error" : undefined}
              aria-invalid={Boolean(error)}
            />
            <button type="submit" disabled={isSearching}>
              {isSearching ? <><span className="spinner" /> Buscando...</> : <>Consultar <ArrowIcon /></>}
            </button>
          </div>
          <div className="form-note">
            <span id="cnpj-error" className={error ? "error-message" : ""}>
              {error || "Use apenas números. Nós cuidamos da formatação."}
            </span>
            <span>Fonte: Receita Federal</span>
          </div>
        </form>
      </section>

      <div className="result-context">
        <div>
          <span className="context-kicker">Resultado da consulta</span>
          <strong>Perfil cadastral consolidado</strong>
        </div>
        <span className="updated-at"><ClockIcon /> Atualizado hoje, às 09:42</span>
      </div>

      <section key={resultKey} className={`result-wrap ${isSearching ? "is-searching" : ""}`} aria-live="polite">
        <div className="result-header">
          <div className="company-heading">
            <div className="company-icon"><BuildingIcon /></div>
            <div>
              <div className="status"><span /> Situação ativa</div>
              <h2>{company.name}</h2>
              <p>{company.tradeName}</p>
            </div>
          </div>
          <button className="copy-button" onClick={copyCnpj} type="button">
            {copied ? <CheckIcon /> : <CopyIcon />}
            {copied ? "Copiado" : searchedCnpj}
          </button>
        </div>

        <div className="health-row">
          <div>
            <span className="health-icon"><CheckIcon /></span>
            <span><small>Status cadastral</small><strong>Ativa</strong></span>
          </div>
          <div>
            <span className="health-icon"><ShieldIcon /></span>
            <span><small>Regularidade</small><strong>{company.registration}</strong></span>
          </div>
          <div>
            <span className="health-score">A</span>
            <span><small>Confiabilidade dos dados</small><strong>Alta</strong></span>
          </div>
        </div>

        <nav className="result-nav" aria-label="Seções do resultado">
          <a href="#cadastro">Cadastro</a>
          <a href="#atividades">Atividades</a>
          <a href="#socios">Sócios</a>
          <a href="#tributario">Tributário</a>
          <a href="#tecnico">Dados técnicos</a>
        </nav>

        <div className="dossier">
          <section className="dossier-section" id="cadastro">
            <div className="section-heading">
              <span className="section-icon"><BuildingIcon /></span>
              <div><span>01</span><h3>Informações cadastrais</h3></div>
            </div>
            <dl className="info-grid">
              <div><dt>Data de abertura</dt><dd>{company.opened}</dd></div>
              <div><dt>Matriz ou filial</dt><dd>{company.type}</dd></div>
              <div><dt>Porte</dt><dd>{company.size}</dd></div>
              <div><dt>Natureza jurídica</dt><dd>{company.nature}</dd><small>Código 399-9</small></div>
              <div><dt>Capital social</dt><dd>{company.capital}</dd></div>
              <div><dt>Situação cadastral</dt><dd className="positive-value">Ativa</dd><small>Desde 03/10/2013</small></div>
              <div><dt>Motivo da situação</dt><dd>Sem motivo</dd><small>Código 0</small></div>
              <div><dt>Responsável</dt><dd>Presidente</dd><small>Qualificação 16</small></div>
            </dl>

            <div className="location-card">
              <span className="section-icon"><PinIcon /></span>
              <div className="location-main">
                <span className="field-label">Endereço cadastrado</span>
                <strong>{company.address}</strong>
                <p>{company.neighborhood} · {company.city}, {company.state} · CEP {company.zipCode}</p>
              </div>
              <div className="contact-data">
                <span><small>Telefone</small><strong>{company.phone}</strong></span>
                <span><small>E-mail</small><strong>{company.email}</strong></span>
              </div>
            </div>
          </section>

          <section className="dossier-section" id="atividades">
            <div className="section-heading">
              <span className="section-icon section-icon-dark">01</span>
              <div><span>02</span><h3>Atividades econômicas</h3></div>
              <span className="section-count">1 principal · 5 secundárias</span>
            </div>
            <div className="primary-activity">
              <span className="activity-code">{company.activityCode}</span>
              <div><small>Atividade principal</small><strong>{company.activity}</strong></div>
            </div>
            <div className="secondary-list">
              {company.secondaryActivities.map(([code, description]) => (
                <div key={code}><span>{code}</span><p>{description}</p></div>
              ))}
            </div>
          </section>

          <section className="dossier-section" id="socios">
            <div className="section-heading">
              <span className="section-icon"><UsersIcon /></span>
              <div><span>03</span><h3>Quadro societário e administradores</h3></div>
              <span className="section-count">1 pessoa</span>
            </div>
            <div className="partner-card">
              <div className="partner-avatar">HS</div>
              <div className="partner-identity">
                <strong>{company.partner.name}</strong>
                <span>{company.partner.role}</span>
              </div>
              <dl>
                <div><dt>CPF</dt><dd>{company.partner.document}</dd></div>
                <div><dt>Faixa etária</dt><dd>{company.partner.ageRange}</dd></div>
                <div><dt>Entrada na sociedade</dt><dd>{company.partner.entryDate}</dd></div>
                <div><dt>Identificador</dt><dd>2 · Pessoa física</dd></div>
                <div><dt>Qualificação</dt><dd>16 · Presidente</dd></div>
                <div><dt>Representante legal</dt><dd>Não informado</dd></div>
                <div><dt>CPF do representante</dt><dd>***000000**</dd></div>
                <div><dt>Qualificação do representante</dt><dd>0 · Não informada</dd></div>
              </dl>
            </div>
          </section>

          <section className="dossier-section" id="tributario">
            <div className="section-heading">
              <span className="section-icon"><ShieldIcon /></span>
              <div><span>04</span><h3>Regime e opções tributárias</h3></div>
            </div>
            <div className="tax-summary">
              <div><small>Simples Nacional</small><strong>Não optante</strong><span>Sem datas de opção ou exclusão</span></div>
              <div><small>Microempreendedor individual</small><strong>Não optante</strong><span>Sem datas de opção ou exclusão</span></div>
              <div><small>Situação especial</small><strong>Não possui</strong><span>Nenhuma ocorrência registrada</span></div>
            </div>
            <div className="tax-history">
              <div className="table-heading"><span>Ano</span><span>Forma de tributação</span><span>Escriturações</span><span>SCP</span></div>
              {company.taxYears.map((year) => (
                <div className="table-row" key={year}>
                  <strong>{year}</strong><span>Isenta do IRPJ</span><span>1 escrituração</span><span>Não vinculada</span>
                </div>
              ))}
            </div>
          </section>

          <section className="dossier-section technical-section" id="tecnico">
            <div className="section-heading">
              <span className="section-icon">&lt;/&gt;</span>
              <div><span>05</span><h3>Dados técnicos do registro</h3></div>
            </div>
            <dl className="technical-grid">
              <div><dt>CNPJ sem formatação</dt><dd>19131243000197</dd></div>
              <div><dt>CNAE fiscal</dt><dd>9430800</dd></div>
              <div><dt>Código do município</dt><dd>7107</dd></div>
              <div><dt>Código IBGE</dt><dd>3550308</dd></div>
              <div><dt>Código do porte</dt><dd>5</dd></div>
              <div><dt>Código da natureza jurídica</dt><dd>3999</dd></div>
              <div><dt>Identificador matriz/filial</dt><dd>1 · Matriz</dd></div>
              <div><dt>Situação cadastral</dt><dd>2 · Ativa</dd></div>
              <div><dt>País / código do país</dt><dd>Não informado</dd></div>
              <div><dt>Cidade no exterior</dt><dd>Não informado</dd></div>
              <div><dt>Ente federativo responsável</dt><dd>Não informado</dd></div>
              <div><dt>Fax / segundo telefone</dt><dd>Não informado</dd></div>
              <div><dt>Data da situação especial</dt><dd>Não informada</dd></div>
              <div><dt>Descrição do porte</dt><dd>Não informada pela fonte</dd></div>
            </dl>
          </section>
        </div>
      </section>

      <section className="trust-strip" id="sobre">
        <div><strong>+60 milhões</strong><span>de registros empresariais</span></div>
        <div><strong>Receita Federal</strong><span>fonte primária dos dados</span></div>
        <div><strong>Privacidade por padrão</strong><span>suas consultas não são armazenadas</span></div>
      </section>

      <footer>
        <span>cnpj<span className="brand-accent">já</span></span>
        <p>Informação pública, do jeito que deveria ser.</p>
        <span>Atualizado em 2025</span>
      </footer>
    </main>
  );
}
