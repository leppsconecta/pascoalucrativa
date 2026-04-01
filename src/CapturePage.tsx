import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Mail,
  User,
  MapPin,
  Loader2,
  Sparkles,
  BookOpen,
  Target,
  Rocket,
  Clock,
  ShieldCheck
} from 'lucide-react';

interface UF {
  id: number;
  sigla: string;
  nome: string;
}

interface Cidade {
  id: number;
  nome: string;
}

export default function CapturePage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    uf: '',
    cidade: ''
  });
  const [ufs, setUfs] = useState<UF[]>([]);
  const [cidades, setCidades] = useState<Cidade[]>([]);
  const [loadingCidades, setLoadingCidades] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
      .then(res => res.json())
      .then(data => setUfs(data));
  }, []);

  useEffect(() => {
    if (formData.uf) {
      setLoadingCidades(true);
      fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${formData.uf}/municipios?orderBy=nome`)
        .then(res => res.json())
        .then(data => {
          setCidades(data);
          setLoadingCidades(false);
        });
    } else {
      setCidades([]);
    }
  }, [formData.uf]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-offwhite py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6 shadow-sm">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-satin-chocolate mb-4 lowercase">
              cadastro finalizado, {formData.nome.split(' ')[0]}!
            </h1>
            <p className="text-xl text-satin-chocolate/70 lowercase max-w-2xl mx-auto font-medium">
              sua vaga na lista vvip está garantida. <span className="text-chocolate-light font-black">vou te enviar uma mensagem no whatsapp nos próximos dias</span> com o seu link de acesso e o desconto liberado.
            </p>
          </motion.div>

          <div className="space-y-12">
            <section className="glass p-8 md:p-12 rounded-[3rem] shadow-soft border-pastel-pink/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Sparkles className="w-32 h-32 text-satin-chocolate" />
              </div>
              <h2 className="text-3xl font-black text-satin-chocolate mb-12 lowercase flex items-center gap-3">
                <BookOpen className="text-chocolate-light" /> o que você vai aprender nesse treinamento
              </h2>

              <div className="grid md:grid-cols-2 gap-8 relative z-10">
                {[
                  {
                    step: "01",
                    title: "posicionamento digital",
                    desc: "técnicas profissionais para criar um perfil que encanta pelo visual e autoridade.",
                    icon: <Target className="w-5 h-5" />
                  },
                  {
                    step: "02",
                    title: "estratégia de vendas",
                    desc: "como atrair clientes todos os dias usando o whatsapp e instagram.",
                    icon: <Rocket className="w-5 h-5" />
                  },
                  {
                    step: "03",
                    title: "fotos com ia",
                    desc: "aprenda a criar fotos de estúdio para seus produtos sem custo.",
                    icon: <Sparkles className="w-5 h-5" />
                  },
                  {
                    step: "04",
                    title: "gestão de pedidos",
                    desc: "organize seu negócio para escalar sem perder a qualidade.",
                    icon: <CheckCircle2 className="w-5 h-5" />
                  }
                ].map((item, idx) => (
                  <div key={idx} className="relative p-6 rounded-2xl bg-white/50 border border-pastel-pink/10 hover:border-pastel-pink/30 hover:bg-white/80 transition-all group">
                    <span className="absolute top-4 right-4 text-4xl font-black text-pastel-pink/20 group-hover:text-pastel-pink/40 transition-colors">{item.step}</span>
                    <div className="w-10 h-10 rounded-xl bg-satin-chocolate text-white flex items-center justify-center mb-4 shadow-lg shadow-satin-chocolate/20">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-xl text-satin-chocolate mb-2 lowercase">{item.title}</h3>
                    <p className="text-satin-chocolate/60 text-sm leading-relaxed lowercase">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-satin-chocolate to-chocolate-light rounded-[3rem] p-8 md:p-12 text-white shadow-2xl text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
              <div className="relative z-10">
                <h2 className="text-3xl font-black mb-6 lowercase flex items-center justify-center gap-3">
                  <Clock className="w-8 h-8" /> aguarde a liberação
                </h2>
                <p className="text-white/80 mb-10 max-w-xl mx-auto lowercase leading-relaxed">
                  em breve você receberá o cronograma completo direto no seu celular. prepare-se para transformar sua vida!
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-bold lowercase">
                  <ShieldCheck className="w-4 h-4 text-green-400" /> reserva confirmada para membresia soroempregos
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-offwhite flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-pastel-pink/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-soft-pink/30 rounded-full blur-[120px]" />

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-satin-chocolate"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pastel-pink/30 border border-pastel-pink/50 text-chocolate-light text-xs font-black tracking-widest uppercase mb-10">
            <Sparkles className="w-4 h-4" /> lista vvip liberada
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.85] tracking-tighter lowercase">
            seu número de whatsapp é <span className="text-chocolate-light underline decoration-pastel-pink decoration-8 italic underline-offset-4">vip</span>.
          </h1>
          <p className="text-xl text-satin-chocolate/80 mb-12 max-w-lg lowercase leading-relaxed font-bold">
            atenção: se você não estiver dentro do grupo de empregos <span className="text-satin-chocolate font-black px-2 py-1 bg-pastel-pink/40 rounded-lg italic">soroempregos</span>, você <span className="text-red-500 uppercase font-black underline">não</span> tem direito ao desconto vvip.
          </p>

          <div className="relative">
            <div className="flex items-center gap-8 p-8 rounded-[2.5rem] glass shadow-soft relative z-10 border-2 border-chocolate-light/20 scale-105">
              <div className="text-center border-r border-pastel-brown/20 pr-8">
                <p className="text-satin-chocolate/40 text-[10px] line-through uppercase mb-1 font-black tracking-widest">de r$ 97,99</p>
                <p className="text-5xl font-black text-satin-chocolate uppercase leading-none">r$ 48,50</p>
              </div>
              <div>
                <p className="text-sm text-satin-chocolate font-black lowercase mb-1 -mt-1">
                  você ganhou r$ 49,49 de desconto!
                </p>
                <p className="text-xs text-satin-chocolate/50 lowercase leading-tight font-medium italic">
                  oferta vvip habilitada para o seu número.
                </p>
              </div>
            </div>

            {/* Benefícios Rápidos */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "acesso vitalício",
                "suporte no grupo",
                "método validado",
                "bônus exclusivos"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-satin-chocolate/70">
                  <CheckCircle2 className="w-4 h-4 text-chocolate-light" />
                  <span className="text-xs font-bold lowercase">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] p-8 md:p-14 shadow-2xl border border-pastel-pink/10 relative"
        >
          <div className="absolute -top-5 -right-5 bg-gradient-to-br from-orange-400 to-red-500 text-white px-8 py-3 rounded-full font-black text-sm uppercase shadow-lg shadow-orange-200 animate-bounce">
            50% de desconto
          </div>

          <h2 className="text-3xl font-black text-satin-chocolate mb-10 lowercase tracking-tight">inscreva-se na lista</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative group">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-pastel-brown group-focus-within:text-satin-chocolate transition-colors" />
              <input
                required
                type="text"
                placeholder="nome completo"
                className="w-full pl-14 pr-6 py-5 rounded-2xl bg-offwhite border border-transparent focus:border-pastel-pink focus:bg-white focus:ring-4 focus:ring-pastel-pink/10 transition-all text-satin-chocolate placeholder:text-pastel-brown/60 placeholder:lowercase lowercase text-lg"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              />
            </div>

            <div className="relative group">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-pastel-brown group-focus-within:text-satin-chocolate transition-colors" />
              <input
                required
                type="email"
                placeholder="seu melhor e-mail"
                className="w-full pl-14 pr-6 py-5 rounded-2xl bg-offwhite border border-transparent focus:border-pastel-pink focus:bg-white focus:ring-4 focus:ring-pastel-pink/10 transition-all text-satin-chocolate placeholder:text-pastel-brown/60 placeholder:lowercase lowercase text-lg"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="relative group">
              <Smartphone className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-pastel-brown group-focus-within:text-satin-chocolate transition-colors" />
              <input
                required
                type="tel"
                placeholder="whatsapp com ddd"
                className="w-full pl-14 pr-6 py-5 rounded-2xl bg-offwhite border border-transparent focus:border-pastel-pink focus:bg-white focus:ring-4 focus:ring-pastel-pink/10 transition-all text-satin-chocolate placeholder:text-pastel-brown/60 placeholder:lowercase lowercase text-lg"
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-3 gap-5">
              <div className="relative col-span-1 group">
                <select
                  required
                  className="w-full pl-5 pr-10 py-5 rounded-2xl bg-offwhite border border-transparent focus:border-pastel-pink focus:bg-white transition-all text-satin-chocolate lowercase appearance-none cursor-pointer text-lg"
                  value={formData.uf}
                  onChange={(e) => setFormData({ ...formData, uf: e.target.value })}
                >
                  <option value="">uf</option>
                  {ufs.map(uf => (
                    <option key={uf.id} value={uf.sigla}>{uf.sigla}</option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-satin-chocolate"></div>
                </div>
              </div>

              <div className="relative col-span-2 group">
                <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-pastel-brown" />
                <select
                  required
                  disabled={!formData.uf || loadingCidades}
                  className="w-full pl-14 pr-10 py-5 rounded-2xl bg-offwhite border border-transparent focus:border-pastel-pink focus:bg-white transition-all text-satin-chocolate lowercase appearance-none cursor-pointer disabled:opacity-40 text-lg"
                  value={formData.cidade}
                  onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                >
                  <option value="">{loadingCidades ? 'carregando...' : 'cidade'}</option>
                  {cidades.map(cidade => (
                    <option key={cidade.id} value={cidade.nome}>{cidade.nome}</option>
                  ))}
                </select>
                {loadingCidades && (
                  <Loader2 className="absolute right-12 top-1/2 -translate-y-1/2 w-5 h-5 animate-spin text-chocolate-light" />
                )}
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-satin-chocolate"></div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-6 bg-gradient-to-r from-satin-chocolate to-chocolate-light text-white rounded-2xl font-black text-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-satin-chocolate/20 mt-6 lowercase flex items-center justify-center gap-3"
            >
              garantir meu desconto <ArrowRight className="w-6 h-6" />
            </button>
            <p className="text-center text-satin-chocolate/40 text-xs mt-6 lowercase font-bold italic">
              * exclusivo para membros do grupo soroempregos.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
