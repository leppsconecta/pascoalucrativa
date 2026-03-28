/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route } from 'react-router-dom';
import CapturePage from './CapturePage';
import {
  MessageCircle,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  ArrowRight,
  Smartphone,
  Camera,
  ChefHat,
  TrendingUp,
  Instagram,
  UserCheck,
  LayoutGrid,
  Video,
  FileText,
  Wand2,
  Facebook,
  Search,
  Music2,
  Target,
  Rocket,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

import eggMm from './assets/egg-mm.png';
import eggBrigadeiro from './assets/egg-brigadeiro.png';
import eggTruffle from './assets/egg-truffle.png';
import eggBefore from './assets/egg-before.png';
import eggAfter from './assets/egg-after.png';
import moneyReal from './assets/money-real.png';

const carouselImages = [
  eggMm,
  eggBrigadeiro,
  eggTruffle
];

const BeforeAfterSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const pos = ((x - container.left) / container.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, pos)));
  };

  return (
    <div
      className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image (Bottom) */}
      <img
        src={eggAfter}
        className="absolute inset-0 w-full h-full object-cover"
        alt="depois da ia"
        referrerPolicy="no-referrer"
      />

      {/* Before Image (Top) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img
          src={eggBefore}
          className="absolute inset-0 w-full h-full object-cover"
          alt="antes da ia"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-1 h-4 bg-satin-chocolate/20 rounded-full" />
            <div className="w-1 h-4 bg-satin-chocolate/20 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export function LandingPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const testimonialMessages = [
    "Muito além de vender ovos",
    "Eu adorei o curso",
    "Faz total sentido o método",
    "Apliquei na minha loja de roupa"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % testimonialMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const modules = [
    {
      id: "00",
      headerPhrase: "Vou te mostrar como você pode crescer!",
      title: "Você no lugar certo!",
      color: "bg-pastel-pink/30",
      content: (
        <div className="space-y-4 text-satin-chocolate/70 leading-relaxed">
          <p>Olá! Tudo bem com você? Eu preparei este treinamento para ir muito além da Páscoa. O que eu vou te ensinar aqui é um método que você pode aplicar em qualquer negócio. Os Ovos de Páscoa são apenas o gatilho para a sua evolução. ( uma Consultoria cobraria de você + de 1000 reais pelo que vou te ensinar )</p>
          <p>Meu objetivo não é apenas te ensinar a produzir ovos de páscoa, até porque a internet está cheia de tutoriais gratuitos. Eu quero que você aprenda a usar as ferramentas certas e entenda a importância de cada uma delas no processo do seu negócio.</p>
        </div>
      )
    },
    {
      id: "01",
      headerPhrase: "Vamos construir o seu próprio negócio.",
      title: "O Mercado de Sucesso",
      color: "bg-blue-50",
      content: (
        <div className="space-y-4 text-satin-chocolate/70 leading-relaxed">
          <p>Eu não estou aqui apenas para te ensinar a fazer ovos de Páscoa, mas para te ensinar a vender, desde a produção até as estratégias e ferramentas certas.</p>
          <p>Neste módulo, você vai receber dicas práticas para produzir ovos de qualidade. Mas o verdadeiro diferencial vem depois.</p>
          <p>Vou te guiar passo a passo para vender, escalar e aumentar seu faturamento.</p>
          <p>Seguindo este método, você poderá aplicar em qualquer negócio e alcançar resultados reais.</p>
          <p>Receitas você encontra na internet. Aqui, você aprende a vender de verdade e transformar conhecimento em lucro.</p>
        </div>
      )
    },
    {
      id: "02",
      headerPhrase: "Eu vou te ajudar a dar adeus ao CLT.",
      title: "WhatsApp: Minha Máquina de Vendas",
      color: "bg-green-100",
      content: (
        <div className="space-y-4 text-satin-chocolate/70 leading-relaxed">
          <p>Não adianta você ter um bom produto se não tiver um canal de vendas eficiente. Neste módulo, eu vou te ensinar a transformar seu WhatsApp em uma estrutura profissional:</p>
          <ul className="space-y-2 list-disc pl-5">
            <li><strong>Configuração Comercial:</strong> Eu te mostro como deixar seu perfil pronto para o jogo.</li>
            <li><strong>Criação de Catálogo:</strong> Vamos facilitar o acesso do seu cliente aos seus produtos.</li>
            <li><strong>Abordagem e Follow-up:</strong> Vou te dar dicas reais de como conversar e manter o cliente por perto.</li>
            <li><strong>Sincronização:</strong> Aprenda a conectar seu WhatsApp com suas redes sociais.</li>
            <li><strong>Grupos:</strong> Eu te ensino como entrar e como abordar as pessoas do jeito certo.</li>
          </ul>
          <p className="italic font-medium">Vender é só a primeira etapa; eu vou te ajudar a fidelizar esse cliente.</p>
        </div>
      )
    },
    {
      id: "03",
      headerPhrase: "Vou te preparar para ser um empresário.",
      title: "Usando a IA para Melhorar suas Imagens",
      color: "bg-purple-100",
      content: (
        <div className="space-y-4 text-satin-chocolate/70 leading-relaxed">
          <p>Se você ainda não conhece o poder da Inteligência Artificial, sinto dizer que você está perdendo dinheiro. Eu vou te mostrar como elevar o nível do seu material:</p>
          <ul className="space-y-2 list-disc pl-5">
            <li><strong>Edição de Estúdio:</strong> Vou te ensinar a criar fotos profissionais para o seu produto sem precisar gastar com fotógrafo.</li>
            <li><strong>Plataformas de IA:</strong> Vou te indicar as ferramentas gratuitas e pagas que eu utilizo.</li>
            <li><strong>Criação Total:</strong> Vamos aprender a gerar imagens e textos que vendem.</li>
          </ul>
        </div>
      )
    },
    {
      id: "04",
      headerPhrase: "Vamos escalar os seus resultados juntos.",
      title: "Cardápio Online e Físico",
      color: "bg-blue-100",
      content: (
        <div className="space-y-4 text-satin-chocolate/70 leading-relaxed">
          <p>Além do catálogo, muitos clientes ainda preferem o formato tradicional de folheto. Eu vou te ensinar a criar essa arte. Inclusive, eu já deixei um modelo pronto para você. Clicou, editou, baixou, enviou para seu cliente.</p>
        </div>
      )
    },
    {
      id: "05",
      headerPhrase: "Sua nova jornada começa agora!",
      title: "Redes Sociais e Anúncios",
      color: "bg-orange-100",
      content: (
        <div className="space-y-4 text-satin-chocolate/70 leading-relaxed">
          <p>"Agora que você já tem o produto em mãos, o WhatsApp configurado, imagens profissionais e seu cardápio pronto, chegou a hora de organizar suas redes sociais. Nós vamos padronizar seus perfis e garantir que tudo esteja conectado corretamente. Eu vou te ajudar a configurar sua vitrine digital do zero: vamos entender como criar um anúncio, onde você deve clicar, quanto investir e como analisar se o resultado está sendo positivo."</p>
        </div>
      )
    },
    {
      id: "06",
      headerPhrase: "Sua nova jornada começa agora!",
      title: "Minhas Dicas de Ouro e Prospecção",
      color: "bg-yellow-100",
      content: (
        <div className="space-y-4 text-satin-chocolate/70 leading-relaxed">
          <p>Eu trabalho com marketing há 11 anos e já ajudei empresas de diversos nichos a alcançarem o sucesso. Por isso, eu não quero apenas te ensinar a vender; eu vou te incentivar a ser um empreendedor de verdade, não importa se o seu produto é Ovo de Páscoa ou qualquer outro. Este módulo é um bônus especial que preparei para você. Mais do que dicas, eu quero te entregar o caminho para você sair do CLT ou escalar o seu próprio negócio. Vamos transformar sua mentalidade juntos.</p>
        </div>
      )
    }
  ];

  const handleNext = () => {
    setDirection(1);
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleDotClick = (idx: number) => {
    setDirection(idx > currentImage ? 1 : -1);
    setCurrentImage(idx);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Learning Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-2xl h-[600px] max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
                <h3 className="text-xl md:text-2xl font-normal bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
                  "{modules[activeStep].headerPhrase || "O que você vai aprender"}"
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-satin-chocolate/40" />
                </button>
              </div>

              {/* Content Area */}
              <div className="flex-grow flex flex-col overflow-hidden">
                <div className="flex-grow overflow-y-auto p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="flex flex-col gap-4">
                        {activeStep !== 0 && (
                          <div className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full ${modules[activeStep].color} text-[10px] font-black text-satin-chocolate w-fit uppercase tracking-widest border border-satin-chocolate/5 shadow-sm`}>
                            Módulo {modules[activeStep].id}
                          </div>
                        )}
                        <h4 className="text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                          {modules[activeStep].title}
                        </h4>
                      </div>

                      {modules[activeStep].content}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Footer */}
                <div className="p-4 md:p-6 bg-gray-50/50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex gap-1.5 md:gap-2 order-2 sm:order-1">
                    {modules.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${idx === activeStep ? "w-6 md:w-8 bg-purple-600" : "w-1.5 md:w-2 bg-gray-200"
                          }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2 md:gap-3 order-1 sm:order-2 w-full sm:w-auto justify-center sm:justify-end">
                    {activeStep > 0 && (
                      <button
                        onClick={() => setActiveStep(prev => prev - 1)}
                        className="p-2.5 md:p-3 rounded-xl border border-gray-200 text-satin-chocolate/60 hover:bg-white transition-all"
                      >
                        <ChevronLeft className="w-4 h-4 md:w-5 h-5" />
                      </button>
                    ) || <div className="w-[42px] md:w-[50px]" />}

                    {activeStep < modules.length - 1 ? (
                      <button
                        onClick={() => setActiveStep(prev => prev + 1)}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-black text-[10px] md:text-sm tracking-widest uppercase hover:scale-[1.02] shadow-lg shadow-blue-500/20 transition-all"
                      >
                        PRÓXIMO <ChevronRight className="w-3.5 h-3.5 md:w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setIsModalOpen(false);
                          document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="flex-1 sm:flex-none px-4 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-black text-[10px] md:text-sm tracking-widest uppercase shadow-xl shadow-purple-500/30 hover:scale-[1.05] transition-all whitespace-nowrap"
                      >
                        Quero evoluir agora
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header / Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-full px-4 md:px-6 py-2.5 md:py-3 shadow-soft border border-pastel-brown/10">
          <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
            <ChefHat className="w-5 h-5 md:w-6 md:h-6 text-satin-chocolate" />
            <span className="font-bold text-base md:text-lg tracking-tight whitespace-nowrap">Páscoa Lucrativa</span>
          </div>
          <button className="hidden md:block text-sm font-medium hover:opacity-70 transition-opacity">
            Sorocaba, SP
          </button>
          <motion.button
            onClick={() => setIsModalOpen(true)}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 md:px-5 py-2 rounded-xl md:rounded-full text-[11px] md:text-sm font-normal md:font-black tracking-tight md:tracking-widest md:uppercase hover:scale-110 shadow-lg shadow-blue-500/20 transition-all leading-tight md:leading-normal whitespace-nowrap"
          >
            O que vou aprender
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-2 bg-pastel-pink/30 text-satin-chocolate px-4 py-1 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Exclusivo para Sorocaba e Região</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
              Transforme sua Páscoa em <span className="text-chocolate-light italic font-serif">Renda Extra</span> em Sorocaba.
            </h1>
            <p className="text-xl text-satin-chocolate/70 mb-10 leading-relaxed max-w-xl">
              aprenda a vender ovos de páscoa, você merece lucrar mais!
            </p>
            <div id="cta" className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="px-8 py-4 md:px-8 md:py-4 rounded-xl md:rounded-2xl text-base md:text-lg font-normal md:font-black text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xl shadow-blue-500/20 hover:scale-[1.05] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group leading-tight whitespace-nowrap"
              >
                O que vou aprender
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <div className="flex items-center gap-3 px-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      alt="Student"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="h-5 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={messageIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm font-medium text-satin-chocolate/60 block whitespace-nowrap"
                    >
                      {testimonialMessages[messageIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl group"
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={currentImage}
                src={carouselImages[currentImage]}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
                alt="ovos de páscoa artesanais"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

            {/* Carousel Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
              aria-label="anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
              aria-label="próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`transition-all duration-300 rounded-full h-2 ${idx === currentImage ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                    }`}
                  aria-label={`ir para slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-pastel-pink/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 -left-20 w-96 h-96 bg-soft-pink/40 rounded-full blur-3xl -z-10" />
      </section>

      {/* WhatsApp Automation Section */}
      <section className="py-12 md:py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Mockup Column */}
          <div className="order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mx-auto w-72 md:w-80 aspect-[9/19] bg-black rounded-[3rem] border-[10px] border-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] overflow-hidden"
            >
              {/* iPhone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-slate-900 rounded-b-3xl z-30" />

              {/* WhatsApp UI */}
              <div className="h-full bg-[#E5DDD5] flex flex-col">
                {/* Header */}
                <div className="bg-[#25D366] pt-10 pb-3 px-4 flex items-center gap-3 shadow-md z-20">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <ChefHat className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Doces da Ana 🐰</p>
                    <p className="text-white/80 text-[10px]">online</p>
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  <div className="bg-white rounded-2xl rounded-tl-none p-3 text-[11px] w-[85%] shadow-sm relative">
                    Oi! Vi seus ovos no Instagram 😍 Tem catálogo?
                  </div>

                  <div className="bg-[#E1FFC7] rounded-2xl rounded-tr-none p-3 text-[11px] w-[85%] ml-auto shadow-sm relative">
                    Olá! 🐣 Claro! Segue nosso catálogo completo. Qual sabor te interessou?
                  </div>

                  <div className="bg-white rounded-2xl rounded-tl-none p-3 text-[11px] w-[85%] shadow-sm relative">
                    Amei o de pistache! Qual o valor?
                  </div>

                  <div className="bg-[#E1FFC7] rounded-2xl rounded-tr-none p-3 text-[11px] w-[85%] ml-auto shadow-sm relative">
                    O de pistache 350g sai por R$65. Encomendas até dia 20/03 ganham frete grátis em Sorocaba! 🚀
                  </div>

                  <div className="bg-white rounded-2xl rounded-tl-none p-3 text-[11px] w-[85%] shadow-sm relative">
                    Fechado! Quero 3! 😍
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-3 bg-white/80 backdrop-blur-md flex items-center gap-2">
                  <div className="flex-1 h-8 bg-white rounded-full border border-gray-200 px-3 flex items-center">
                    <span className="text-gray-400 text-[10px]">Mensagem</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Accents */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-pastel-pink/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-soft-pink/30 rounded-full blur-3xl -z-10" />
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Domine as Vendas pelo <span className="text-[#25D366]">WhatsApp</span>
              </h2>
              <p className="text-lg text-satin-chocolate/70 mb-12 leading-relaxed">
                Transforme seu celular em uma máquina de vendas. Aprenda o passo a passo para profissionalizar seu atendimento e fechar pedidos todos os dias.
              </p>

              <div className="grid grid-cols-2 gap-3 lg:flex lg:flex-col lg:gap-6">
                {[
                  {
                    icon: <UserCheck className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />,
                    title: "Perfil Comercial de Alto Impacto",
                    desc: "Aprenda configurar um perfil profissional que transmite credibilidade instantânea aos seus clientes."
                  },
                  {
                    icon: <LayoutGrid className="w-5 h-5 lg:w-6 lg:h-6 text-orange-600" />,
                    title: "Catálogo Profissional",
                    desc: "Organize seus ovos de Páscoa e produtos em um catálogo prático que facilita a escolha do cliente."
                  },
                  {
                    icon: <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />,
                    title: "Scripts de Vendas",
                    desc: "Utilize roteiros prontos de recepção e follow-up para conduzir o cliente até o fechamento da compra."
                  },
                  {
                    icon: <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" />,
                    title: "Grupos e Listas",
                    desc: "Aprenda a utilizar grupos e listas de transmissão para atingir milhares de pessoas de forma estratégica."
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass p-4 lg:p-6 rounded-3xl shadow-soft border border-pastel-brown/10 flex flex-col lg:flex-row items-center lg:items-center text-center lg:text-left gap-3 lg:gap-6 hover:bg-white/60 transition-colors group"
                  >
                    <div className="bg-white w-10 h-10 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-sm border border-pastel-brown/5 group-hover:scale-110 transition-transform shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm lg:text-xl mb-0.5 lg:mb-1 leading-tight">{item.title}</h3>
                      <p className="text-satin-chocolate/60 text-[10px] lg:text-sm leading-tight lg:leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Revolution Section */}
      <section className="py-12 md:py-24 px-6 bg-gradient-to-br from-soft-pink/40 via-blue-50/80 to-soft-pink/40 relative overflow-hidden border-y border-blue-200/30">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#2563eb 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

        <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-satin-chocolate via-blue-600 to-satin-chocolate bg-clip-text text-transparent">
              Faça imagens perfeitas do seu produto, usando IA
            </h2>
            <p className="text-xl text-satin-chocolate/70 max-w-2xl mx-auto mb-12">
              Sua vitrine de luxo sem gastar com fotógrafo. Use a tecnologia a seu favor.
            </p>

            <div className="max-w-4xl mx-auto mb-20">
              <BeforeAfterSlider />
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 relative z-10">
          {[
            {
              icon: <Camera className="w-6 h-6 md:w-8 md:h-8 text-white" />,
              title: "Fotos com IA",
              desc: "Crie imagens deliciosas."
            },
            {
              icon: <FileText className="w-6 h-6 md:w-8 md:h-8 text-white" />,
              title: "Textos com IA",
              desc: "Textos persuasivos."
            },
            {
              icon: <Video className="w-6 h-6 md:w-8 md:h-8 text-white" />,
              title: "Vídeos com IA",
              desc: "Vídeos perfeitos com IA."
            },
            {
              icon: <Wand2 className="w-6 h-6 md:w-8 md:h-8 text-white" />,
              title: "Assistente",
              desc: "Seu assistente de sucesso!"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-blue-950/5 backdrop-blur-2xl p-5 md:p-8 rounded-3xl shadow-[0_0_50px_-12px_rgba(37,99,235,0.1)] hover:shadow-[0_0_50px_-12px_rgba(37,99,235,0.3)] hover:scale-[1.02] transition-all duration-500 border border-blue-500/20 hover:border-blue-500 group relative overflow-hidden flex flex-col items-center text-center"
            >
              {/* Animated Glow Background */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 rounded-full blur-[80px] group-hover:bg-blue-600/30 transition-all duration-700" />

              {/* Icon Container with Tech Style */}
              <div className="relative mb-4 md:mb-8">
                <div className="absolute inset-0 bg-blue-600 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:rotate-6 transition-transform">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-satin-chocolate group-hover:text-blue-700 transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-satin-chocolate/60 text-xs md:text-base leading-relaxed group-hover:text-satin-chocolate/80 transition-colors">
                {item.desc}
              </p>

              {/* Tech Corner Accents */}
              <div className="absolute top-4 right-4 w-2 h-2 border-t-2 border-r-2 border-blue-500/0 group-hover:border-blue-500/50 transition-all" />
              <div className="absolute bottom-4 left-4 w-2 h-2 border-b-2 border-l-2 border-blue-500/0 group-hover:border-blue-500/50 transition-all" />

              {/* Scanning Line Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-1/2 w-full -translate-y-full group-hover:animate-[scan_2s_linear_infinite] pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Decorative Circles */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-pastel-pink/20 rounded-full blur-3xl" />
      </section>

      {/* Menu Section */}
      <section className="py-12 md:py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-black tracking-widest uppercase mb-8">
              Design & Praticidade
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-satin-chocolate mb-8 leading-tight">
              Seu <span className="text-blue-600">Cardápio Profissional</span> pronto em minutos.
            </h2>
            <p className="text-xl text-satin-chocolate/70 leading-relaxed mb-10">
              Não se preocupe com design complexo. Você vai aprender a criar um cardápio irresistível para seus produtos.
              <span className="block mt-4 font-bold text-satin-chocolate">
                E o melhor: nós preparamos um modelo exclusivo para você apenas editar e começar a vender!
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Visual representation of a menu */}
            <div className="relative z-10 glass p-8 rounded-[3rem] border-white/40 shadow-2xl">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <h3 className="text-2xl font-black text-satin-chocolate">Cardápio de Páscoa</h3>
                  <ChefHat className="w-8 h-8 text-blue-600" />
                </div>
                {[
                  { name: "Ovo de Pistache", price: "R$ 85,00", desc: "Chocolate belga com recheio cremoso de pistache." },
                  { name: "Ovo de Avelã", price: "R$ 75,00", desc: "Crocante de avelã com chocolate meio amargo." },
                  { name: "Ovo de Ninho", price: "R$ 65,00", desc: "Leite ninho com nutella original." }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-4 p-4 rounded-2xl hover:bg-blue-50 transition-colors">
                    <div>
                      <h4 className="font-bold text-satin-chocolate">{item.name}</h4>
                      <p className="text-xs text-satin-chocolate/60">{item.desc}</p>
                    </div>
                    <span className="font-black text-blue-600 whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl -z-10 opacity-50" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pastel-pink rounded-full blur-3xl -z-10 opacity-30" />
          </motion.div>
        </div>
      </section>

      {/* Advertising Section (Modern Refactor) */}
      <section className="py-12 md:py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[#f09433] to-[#bc1888] text-white text-xs font-black tracking-widest uppercase mb-8"
            >
              Alcance & Lucro
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-satin-chocolate mb-8">
              Venda para as <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]">pessoas certas</span>, na hora certa.
            </h2>

            <p className="text-xl text-satin-chocolate/70 font-medium leading-relaxed max-w-xl mb-12">
              Não espere o cliente bater na sua porta. Use o poder do tráfego pago para atrair centenas de pedidos todos os dias através das redes sociais.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
                { icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
                { icon: <WhatsAppIcon className="w-5 h-5" />, label: "WhatsApp" },
                { icon: <Search className="w-5 h-5" />, label: "Google" },
                { icon: <Music2 className="w-5 h-5" />, label: "TikTok" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-satin-chocolate/40 group-hover:bg-gradient-to-tr group-hover:from-[#f09433] group-hover:to-[#bc1888] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-xs font-black tracking-widest uppercase text-satin-chocolate/40 group-hover:text-satin-chocolate transition-colors">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Modern Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-tr from-[#f09433] to-[#bc1888] rounded-full blur-[100px] opacity-20" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400 rounded-full blur-[100px] opacity-10" />

            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-black/10">
              <img
                src={moneyReal}
                alt="Sucesso Financeiro Real Brasileiro"
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Success Cards (Notification Style) */}
              <div className="absolute inset-0 p-6 flex flex-col justify-center gap-4 md:gap-6 pointer-events-none">
                <motion.div
                  initial={{ x: -20, opacity: 0, scale: 0.9 }}
                  whileInView={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.2 }}
                  className="mx-auto w-full max-w-[280px] glass p-3 rounded-2xl border-white/40 shadow-2xl z-20 flex items-center gap-3 pointer-events-auto"
                >
                  <div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-500/20 shrink-0">
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-[10px] font-black tracking-widest uppercase text-[#25D366]">WhatsApp</p>
                    <p className="text-xs font-bold text-satin-chocolate">Você recebeu 10 novas mensagens</p>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </motion.div>

                <motion.div
                  initial={{ x: 20, opacity: 0, scale: 0.9 }}
                  whileInView={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5, type: "spring", bounce: 0.2 }}
                  className="mx-auto w-full max-w-[280px] glass p-3 rounded-2xl border-white/40 shadow-2xl z-20 flex items-center gap-3 pointer-events-auto"
                >
                  <div className="w-10 h-10 bg-[#1877F2] rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="text-[10px] font-black tracking-widest uppercase text-[#1877F2]">Facebook</p>
                    <p className="text-xs font-bold text-satin-chocolate">Seu anúncio atingiu 15k pessoas</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0, scale: 0.9 }}
                  whileInView={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8, type: "spring", bounce: 0.2 }}
                  className="mx-auto w-full max-w-[280px] glass p-3 rounded-2xl border-white/40 shadow-2xl z-20 flex items-center gap-3 pointer-events-auto"
                >
                  <div className="w-10 h-10 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-xl flex items-center justify-center text-white shadow-lg shadow-pink-500/20 shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.984 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.055 1.17-.248 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.056.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.074c-1.17-.055-1.805-.248-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.056-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.016-3.585.071-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zM12 5.837a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="text-[10px] font-black tracking-widest uppercase text-[#bc1888]">Instagram</p>
                    <p className="text-xs font-bold text-satin-chocolate">Você tem 17 directs aguardando</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: 20, opacity: 0, scale: 0.9 }}
                  whileInView={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.1, type: "spring", bounce: 0.2 }}
                  className="mx-auto w-full max-w-[280px] glass p-3 rounded-2xl border-white/40 shadow-2xl z-20 flex items-center gap-3 pointer-events-auto"
                >
                  <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white shadow-lg shadow-black/20 shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                      <path d="M12.525.02c1.31-.036 2.612.012 3.914.03.03 1.56.233 3.113 1.017 4.505.803 1.416 2.075 2.522 3.594 3.056.03 1.109.03 2.219.03 3.328-1.065-.163-2.13-.52-3.086-1.014-.98-.507-1.787-1.277-2.374-2.211-.01 4.481.044 8.962-.055 13.442-.149 2.227-1.195 4.368-3.005 5.676-2.015 1.456-4.826 1.756-7.082.772-2.102-.913-3.613-3.067-3.849-5.35-.357-3.445 2.125-6.749 5.547-7.241.55-.079 1.103-.079 1.652-.016v3.387c-.393-.082-.799-.072-1.194-.019-1.45.195-2.644 1.475-2.695 2.935-.107 1.569 1.051 2.972 2.56 3.21 1.48.233 3.028-.591 3.447-2.025.095-.322.102-.66.102-.996 0-5.978-.006-11.957.005-17.935z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="text-[10px] font-black tracking-widest uppercase text-gray-500">TikTok</p>
                    <p className="text-xs font-bold text-satin-chocolate">Seu post atingiu 45 mil pessoas</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guarantee & Pricing */}
      <section id="pricing" className="pt-0 pb-12 md:py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="flex md:grid md:grid-cols-2 gap-4 items-stretch overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pt-12 pb-12 md:pb-0 px-6 md:px-4">
            {/* Plan 2 - Most Bought (Vibrant & Modern Glass) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col min-w-[calc(100vw-100px)] md:min-w-0 snap-center md:order-2 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-pink-600/20 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
              <div className="relative flex-grow flex flex-col bg-white/60 backdrop-blur-3xl border-2 border-blue-500/50 p-5 md:p-6 rounded-[2.5rem] shadow-2xl shadow-blue-500/10 transition-transform duration-500">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase whitespace-nowrap shadow-lg shadow-blue-500/20">
                  Mais Comprado
                </div>

                <div className="text-center mb-8 md:mb-10">
                  <h3 className="text-[10px] md:text-sm font-black tracking-widest uppercase text-blue-600/60 mb-2">Plano Premium</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-base md:text-lg font-bold text-blue-600">R$</span>
                    <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-600">57,99</span>
                  </div>
                  <p className="text-satin-chocolate/40 text-[10px] font-bold tracking-widest uppercase mt-2">Pagamento Único</p>
                </div>

                <ul className="text-left space-y-5 mb-10 flex-grow">
                  {[
                    "Como produzir os ovos",
                    "Configurar WhatsApp",
                    "IA na produção de Imagens",
                    "Como vender na sua cidade",
                    "Dicas de abordagem"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-satin-chocolate/80 group/item">
                      <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center group-hover/item:bg-blue-500 group-hover/item:text-white transition-all duration-300">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm font-semibold tracking-tight">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black text-sm tracking-widest uppercase shadow-xl shadow-blue-600/20 hover:scale-[1.02] active:scale-95 transition-all duration-300">
                  QUERO O ACESSO COMPLETO
                </button>
              </div>
            </motion.div>

            {/* Plan 1 - Essencial (Solid & Minimal) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative flex flex-col min-w-[calc(100vw-100px)] md:min-w-0 snap-center md:order-1"
            >
              <div className="relative flex-grow flex flex-col bg-white border border-satin-chocolate/5 p-5 md:p-6 rounded-[2.5rem] shadow-soft">
                <div className="text-center mb-8 md:mb-10">
                  <h3 className="text-[10px] md:text-sm font-black tracking-widest uppercase text-satin-chocolate/30 mb-2">Plano Essencial</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-base md:text-lg font-bold text-satin-chocolate/40">R$</span>
                    <span className="text-5xl md:text-6xl font-black text-satin-chocolate/40">47,99</span>
                  </div>
                  <p className="text-satin-chocolate/20 text-[10px] font-bold tracking-widest uppercase mt-2">Pagamento Único</p>
                </div>

                <ul className="text-left space-y-5 mb-10 flex-grow">
                  {[
                    "Como produzir os ovos",
                    "Configurar WhatsApp"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-satin-chocolate/40">
                      <div className="w-6 h-6 rounded-full bg-satin-chocolate/5 flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm font-medium tracking-tight">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-5 rounded-2xl border-2 border-satin-chocolate/10 text-satin-chocolate/40 font-black text-sm tracking-widest uppercase hover:bg-satin-chocolate/5 transition-all duration-300">
                  ESCOLHER ESTE
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee de Apoio */}
      <div className="w-full bg-white border-t border-satin-chocolate/10 py-6 md:py-10 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 60,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-20 items-center pr-20"
          >
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-sm md:text-lg font-bold text-satin-chocolate/40 tracking-widest uppercase">
                Este projeto é apoiado por <span className="text-satin-chocolate font-black">soroempregos.com.br</span> | O maior portal de emprego de Sorocaba e Região
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cpascoalucrativa" element={<CapturePage />} />
    </Routes>
  );
}
