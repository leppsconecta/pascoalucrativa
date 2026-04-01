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
  ChevronRight,
  Loader2,
  Mail
} from 'lucide-react';
import { supabase } from './lib/supabase';

import eggMm from './assets/egg-mm.png';
import eggBrigadeiro from './assets/egg-brigadeiro.png';
import eggTruffle from './assets/egg-truffle.png';
import eggBefore from './assets/egg-before.png';
import eggAfter from './assets/egg-after.png';
import moneyReal from './assets/money-real.png';
import menuMockup from './assets/menu-mockup.png';
import clothingMockup from './assets/clothing-mockup.png';
import mechPartsMockup from './assets/mech-parts-mockup.png';
import tshirtBefore from './assets/tshirt-before.png';
import tshirtAfter from './assets/tshirt-after.png';
import mechBefore from './assets/mech-before.png';
import mechAfter from './assets/mech-after.png';
import heroCake from './assets/hero-cake.png';
import heroRestaurant from './assets/hero-restaurant.png';
import heroSuccess from './assets/hero-success.png';
import crmContracts from './assets/crm-contracts.png';
import crmLeads from './assets/crm-leads.png';
import crmOmnichannel from './assets/crm-omnichannel.jpg';

const carouselImages = [
  heroCake,
  heroRestaurant,
  heroSuccess
];

const crmImages = [
  crmOmnichannel,
  crmLeads
];

const portfolioImages = [
  {
    url: menuMockup,
    title: "Menu de restaurante",
    category: "gastronomia"
  },
  {
    url: clothingMockup,
    title: "Catálogo de roupa",
    category: "moda"
  },
  {
    url: mechPartsMockup,
    title: "Catálogo de peças",
    category: "mecânica"
  }
];

const transformationSets = [
  {
    id: 'eggs',
    title: 'Produtos de Páscoa',
    before: eggBefore,
    after: eggAfter,
    label: ''
  },
  {
    id: 'fashion',
    title: 'Moda e Vestuário',
    before: tshirtBefore,
    after: tshirtAfter,
    label: ''
  },
  {
    id: 'mechanic',
    title: 'Fachada e Serviços',
    before: mechBefore,
    after: mechAfter,
    label: ''
  }
];

const BeforeAfterSlider = ({ before, after, altBefore, altAfter }: { before: string, after: string, altBefore: string, altAfter: string }) => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const pos = ((x - container.left) / container.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, pos)));
  };

  return (
    <div
      className="relative w-full aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image (Bottom) */}
      <img
        src={after}
        className="absolute inset-0 w-full h-full object-cover"
        alt={altAfter}
        referrerPolicy="no-referrer"
      />

      {/* Before Image (Top) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img
          src={before}
          className="absolute inset-0 w-full h-full object-cover"
          alt={altBefore}
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
  const [isDiscountSearching, setIsDiscountSearching] = useState(false);
  const [isLeadSubmitted, setIsLeadSubmitted] = useState(false);
  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [crmIndex, setCrmIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadFormData, setLeadFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  });
  const [discountApplied, setDiscountApplied] = useState(() => {
    const saved = localStorage.getItem('discountApplied');
    return saved === 'true';
  });
  const [timeLeft, setTimeLeft] = useState(() => {
    const endTime = localStorage.getItem('discountEndTime');
    if (endTime) {
      const remaining = Math.floor((parseInt(endTime) - Date.now()) / 1000);
      return remaining > 0 ? remaining : 0;
    }
    return 1800; // 30 minutes
  });

  const testimonialMessages = [
    "Quem realmente quer sair do CLT ou fazer um upgrade na sua empresa",
    "Alimente seu sonho, e não do seu patrão",
    "Saia do CLT e abra seu próprio negócio",
    "Você é capaz!"
  ];

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const limited = numbers.slice(0, 11);
    if (limited.length <= 2) return limited;
    if (limited.length <= 3) return `${limited.slice(0, 2)} ${limited.slice(2)}`;
    if (limited.length <= 7) return `${limited.slice(0, 2)} ${limited.slice(2, 3)} ${limited.slice(3)}`;
    return `${limited.slice(0, 2)} ${limited.slice(2, 3)} ${limited.slice(3, 7)}-${limited.slice(7)}`;
  };

  useEffect(() => {
    const portfolioTimer = setInterval(() => {
      setPortfolioIndex((prev) => (prev + 1) % portfolioImages.length);
    }, 5000);
    return () => clearInterval(portfolioTimer);
  }, []);

  useEffect(() => {
    const crmTimer = setInterval(() => {
      setCrmIndex((prev) => (prev + 1) % crmImages.length);
    }, 5000);
    return () => clearInterval(crmTimer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % testimonialMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (discountApplied && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [discountApplied, timeLeft]);

  const handleApplyDiscount = () => {
    setIsDiscountSearching(true);
    setTimeout(() => {
      setIsDiscountSearching(false);
      setDiscountApplied(true);
      const endTime = Date.now() + 1800 * 1000;
      localStorage.setItem('discountEndTime', endTime.toString());
      localStorage.setItem('discountApplied', 'true');
      setTimeLeft(1800);
    }, 4000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const modules = [
    {
      id: "00",
      headerPhrase: "Vou te mostrar como você pode crescer!",
      title: "Você fez a escolha certa!",
      color: "bg-pastel-pink/30",
      content: (
        <div className="space-y-4 text-satin-chocolate/70 leading-relaxed">
          <p>Oi! Eu criei esse curso para pessoas que têm o desejo de se tornar empresárias. Este é o pontapé inicial para você sair do CLT ou até mesmo elevar o seu nível de conhecimento.</p>
          <p>Eu sei que não é fácil. Sei da sua luta e do seu sonho de ter o próprio negócio.</p>
          <p>Por isso, você vai aprender a usar as ferramentas certas a seu favor, de forma estratégica e prática, para começar a construir algo realmente seu.</p>
        </div>
      )
    },
    {
      id: "01",
      headerPhrase: "Encontre o seu propósito e comece hoje.",
      title: "Escolhendo a Minha Área",
      color: "bg-blue-50",
      content: (
        <div className="space-y-4 text-satin-chocolate/70 leading-relaxed">
          <p className="font-bold text-satin-chocolate">Este módulo é a chave para o seu sucesso.</p>
          <p>O primeiro passo é escolher uma área com a qual você se identifique, seja vender bolo de pote, abrir uma loja de roupas, montar um pet shop ou vender produtos de beleza.</p>
          <p>Você precisa dar o primeiro passo. Depois disso, vamos aprender a utilizar as ferramentas corretas para o seu negócio.</p>
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
      headerPhrase: "Crie uma vitrine que venda por você.",
      title: "Catálogo, Portfolio, Menu",
      color: "bg-blue-100",
      content: (
        <div className="space-y-4 text-satin-chocolate/70 leading-relaxed">
          <p>Sua empresa precisa de uma vitrine que venda por você. Seja para apresentar um menu de restaurante, um catálogo de peças ou um portfólio de serviços, o impacto visual é o que define o fechamento do negócio.</p>
          <p>Não se preocupe com técnicas complexas de design. Eu vou te ensinar a criar um catálogo completo e profissional do zero!</p>
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
          <p>Agora que você já tem o produto em mãos, o WhatsApp configurado, imagens profissionais e seu cardápio pronto, chegou a hora de organizar suas redes sociais. Nós vamos padronizar seus perfis e garantir que tudo esteja conectado corretamente. Eu vou te ajudar a configurar sua vitrine digital do zero: vamos entender como criar um anúncio, onde você deve clicar, quanto investir e como analisar se o resultado está sendo positivo.</p>
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
                          document.getElementById('capture')?.scrollIntoView({ behavior: 'smooth' });
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
        <div className="max-w-7xl mx-auto flex justify-center items-center glass rounded-full px-4 md:px-6 py-2.5 md:py-3 shadow-soft border border-pastel-brown/10 relative">
          <div className="flex items-center gap-1.5 md:gap-2 shrink-0 text-blue-600">
            <Rocket className="w-5 h-5 md:w-6 md:h-6" />
            <span className="font-black text-base md:text-lg tracking-tight whitespace-nowrap">1º Passo para o sucesso!</span>
          </div>
          <button className="absolute right-6 hidden md:block text-sm font-medium hover:opacity-70 transition-opacity">
            Sorocaba, SP
          </button>
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
              Este curso é para <span className="text-chocolate-light italic font-serif">Quem quer mudar</span> de vida!
            </h1>
            <div className="h-16 md:h-12 overflow-hidden mb-10">
              <AnimatePresence mode="wait">
                <motion.p
                  key={messageIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl text-satin-chocolate/70 leading-tight md:leading-relaxed max-w-xl font-medium"
                >
                  {testimonialMessages[messageIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
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

              <button
                onClick={() => document.getElementById('capture')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 md:px-8 md:py-4 rounded-xl md:rounded-2xl text-base md:text-lg font-normal md:font-black text-satin-chocolate bg-white border-2 border-satin-chocolate/10 shadow-lg hover:bg-gray-50 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group leading-tight whitespace-nowrap"
              >
                Quero evoluir agora
                <Rocket className="w-5 h-5 group-hover:-translate-y-1 transition-transform text-blue-600" />
              </button>
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
                alt="histórias de sucesso e transformação"
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

      {/* CRM Tools Section */}
      <section className="py-12 md:py-24 px-6 bg-gray-50/50 overflow-hidden border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-satin-chocolate via-blue-600 to-satin-chocolate bg-clip-text text-transparent">
              Quais ferramentas eu devo utilizar?
            </h2>
            <p className="text-lg md:text-xl text-satin-chocolate/70 leading-relaxed font-medium">
              Você vai aprender tudo sobre CRM, ferramenta que as multinacionais usam para gerenciar pedidos, clientes, estoques e muito mais
            </p>
          </div>

          <div className="w-full max-w-5xl">
            <div className="relative group">
              <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-950">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={crmIndex}
                    src={crmImages[crmIndex]}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: "anticipate" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="interface de gerenciamento crm"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-3 mt-8">
                {crmImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCrmIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      crmIndex === idx ? 'w-10 bg-blue-600 shadow-lg shadow-blue-500/20' : 'w-2 bg-blue-600/20 hover:bg-blue-600/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
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
                    desc: "Aprenda criar um catálogo dos seus produtos ou serviços dentro do WhatsApp. Facilite a vida dos seus clientes"
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
              <div className="flex flex-col gap-8">
                <div className="flex justify-center gap-3">
                  {transformationSets.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSliderIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        sliderIndex === idx ? 'w-10 bg-blue-600 shadow-lg shadow-blue-500/20' : 'w-2 bg-blue-600/20 hover:bg-blue-600/40'
                      }`}
                    />
                  ))}
                </div>

                <motion.div
                  key={sliderIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <BeforeAfterSlider 
                    before={transformationSets[sliderIndex].before}
                    after={transformationSets[sliderIndex].after}
                    altBefore={`antes - ${transformationSets[sliderIndex].title}`}
                    altAfter={`depois - ${transformationSets[sliderIndex].title}`}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 relative z-10">
          {[
            {
              icon: <Camera className="w-6 h-6 md:w-8 md:h-8 text-white" />,
              title: "Fotos com IA",
              desc: "Crie imagens dos seus produtos ou serviços"
            },
            {
              icon: <FileText className="w-6 h-6 md:w-8 md:h-8 text-white" />,
              title: "Textos",
              desc: "Como criar os melhores textos para seus projetos"
            },
            {
              icon: <Wand2 className="w-6 h-6 md:w-8 md:h-8 text-white" />,
              title: "Assistente",
              desc: "Crie um agente para te auxiliar nas decisões e criatividade"
            },
            {
              isText: true,
              title: "Use a IA ao seu favor! Surpreenda seu cliente."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`p-5 md:p-8 rounded-3xl transition-all duration-500 group relative overflow-hidden flex flex-col items-center text-center ${item.isText
                ? "bg-transparent border-none flex items-center justify-center p-0"
                : "bg-blue-950/5 backdrop-blur-2xl shadow-[0_0_50px_-12px_rgba(37,99,235,0.1)] hover:shadow-[0_0_50px_-12px_rgba(37,99,235,0.3)] hover:scale-[1.02] border border-blue-500/20 hover:border-blue-500"
                }`}
            >
              {item.isText ? (
                <p className="text-xl md:text-2xl font-black italic text-satin-chocolate/80 leading-tight">
                  {item.title}
                </p>
              ) : (
                <>
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
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Decorative Circles */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-pastel-pink/20 rounded-full blur-3xl" />
      </section>

      {/* Menu Section (Portfolio Transformation) */}
      <section id="portfolio" className="py-12 md:py-32 px-6 bg-white overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-black tracking-widest uppercase mb-8">
              Design & Portfólio
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-satin-chocolate mb-8 leading-[1.1] tracking-tight">
              Aprenda a criar seu <span className="text-blue-600 italic font-serif">Catálogo de Serviços</span> ou produto!
            </h2>
            <div className="space-y-6">
              <p className="text-2xl font-bold text-satin-chocolate">
                Sua empresa precisa de um portfólio.
              </p>
              <p className="text-xl text-satin-chocolate/70 leading-relaxed">
                Não se preocupe com design complexo. Você vai aprender a criar um catálogo completo! Seja um menu de restaurante ou um catálogo de peças.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 w-full max-w-xl mx-auto lg:max-w-none"
          >
            {/* Background Elements */}
            <div className="absolute -inset-10 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5 rounded-[4rem] blur-3xl -z-10" />
            
            <div className="relative aspect-[4/3] md:aspect-video lg:aspect-square group cursor-pointer overflow-hidden rounded-[3rem] shadow-2xl border border-white/40">
              <AnimatePresence mode="wait">
                <motion.div
                  key={portfolioIndex}
                  initial={{ opacity: 0, scale: 1.1, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -20 }}
                  transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="absolute inset-0"
                >
                  <img
                    src={portfolioImages[portfolioIndex].url}
                    alt={portfolioImages[portfolioIndex].title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
              </AnimatePresence>


              {/* Progress Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {portfolioImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPortfolioIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === portfolioIndex ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-3xl -z-10 opacity-20 blur-xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-600 rounded-full -z-10 opacity-10 blur-2xl animate-bounce" />
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

      {/* Lead Capture Section */}
      <section id="capture" className="py-12 md:py-32 px-6 bg-white overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {!isLeadSubmitted ? (
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Marketing Copy */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-5xl font-bold text-satin-chocolate leading-[1.1] tracking-tight">
                    Só preencha este formulário, se realmente você <span className="text-chocolate-light italic font-serif">quer mudar de vida!</span>
                  </h2>
                  <p className="text-xl text-satin-chocolate/70 leading-relaxed">
                    Alimente os seus sonhos, e não os sonhos do seu patrão;
                  </p>
                  <p className="text-2xl font-bold text-satin-chocolate">
                    Seja um empreendedor de sucesso.
                  </p>
                </div>

                <div className="pt-4">
                  <h3 className="text-4xl md:text-6xl font-bold text-satin-chocolate tracking-tight">
                    Agora é a <span className="text-chocolate-light italic font-serif underline decoration-pastel-pink/30 decoration-8 underline-offset-8">hora!</span>
                  </h3>
                </div>

              </motion.div>

              {/* Right Column - Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5 rounded-[3rem] blur-2xl" />
                
                <div className="relative glass p-8 md:p-12 rounded-[3rem] border-white/40 shadow-2xl">
                  <form 
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setIsSubmitting(true);
                      
                      try {
                        const { error } = await supabase
                          .schema('captura')
                          .from('leads')
                          .insert([
                            { 
                              name: leadFormData.nome, 
                              email: leadFormData.email, 
                              whatsapp: leadFormData.telefone,
                              phone: leadFormData.telefone,
                              type: '1-passo',
                              metadata: {
                                source: 'landing-page',
                                project: '1º passo para o sucesso!',
                                path: window.location.pathname
                              }
                            }
                          ]);

                        if (error) throw error;

                        setIsLeadSubmitted(true);
                        window.scrollTo({ top: document.getElementById('capture')?.offsetTop || 0, behavior: 'smooth' });
                      } catch (err) {
                        console.error('Error saving lead:', err);
                        alert('Ocorreu um erro ao salvar seu contato. Por favor, tente novamente.');
                      } finally {
                        setIsSubmitting(false);
                      }
                    }} 
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label htmlFor="nome" className="block text-xs font-black tracking-widest text-satin-chocolate/40 uppercase">nome</label>
                      <input
                        id="nome"
                        required
                        type="text"
                        placeholder="seu nome completo"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-blue-500/20 focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all text-satin-chocolate placeholder:text-satin-chocolate/30 lowercase text-lg"
                        value={leadFormData.nome}
                        onChange={(e) => setLeadFormData({ ...leadFormData, nome: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="telefone" className="block text-xs font-black tracking-widest text-satin-chocolate/40 uppercase">telefone</label>
                      <input
                        id="telefone"
                        required
                        type="tel"
                        placeholder="15 9 1234-1234"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-blue-500/20 focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all text-satin-chocolate placeholder:text-satin-chocolate/30 lowercase text-lg"
                        value={leadFormData.telefone}
                        onChange={(e) => setLeadFormData({ ...leadFormData, telefone: formatPhone(e.target.value) })}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-black tracking-widest text-satin-chocolate/40 uppercase">e-mail</label>
                      <input
                        id="email"
                        required
                        type="email"
                        placeholder="seu@email.com"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-blue-500/20 focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all text-satin-chocolate placeholder:text-satin-chocolate/30 lowercase text-lg"
                        value={leadFormData.email}
                        onChange={(e) => setLeadFormData({ ...leadFormData, email: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-black text-sm tracking-widest uppercase shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-wait flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          processando...
                        </>
                      ) : (
                        'garantir meu acesso'
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          ) : (
            /* Success Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center space-y-8 py-12"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl animate-pulse" />
                <div className="relative w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black text-satin-chocolate tracking-tight">
                  Parabéns <span className="text-chocolate-light italic font-serif capitalize">{leadFormData.nome.split(' ')[0]}</span>
                </h2>
                <p className="text-2xl md:text-3xl font-bold text-satin-chocolate/80">
                  Você deu o primeiro passo!
                </p>
                <p className="text-lg text-satin-chocolate/60 leading-relaxed max-w-lg mx-auto">
                  Em breve iremos enviar mais informações para você entrar na primeira turma do curso
                </p>
              </div>



              {/* Floating Party Effects Mockup */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <Sparkles className="absolute top-1/4 left-1/4 w-8 h-8 text-pastel-pink/30 animate-bounce" />
                <Sparkles className="absolute bottom-1/4 right-1/4 w-8 h-8 text-blue-200/40 animate-pulse" />
              </div>
            </motion.div>
          )}
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

      {/* Floating Discount Search Modal */}
      <AnimatePresence>
        {isDiscountSearching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md px-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 max-w-md w-full text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                  className="h-full bg-blue-600"
                />
              </div>

              <div className="mb-8 relative inline-block">
                <div className="absolute inset-0 bg-blue-600 blur-2xl opacity-20 animate-pulse" />
                <div className="relative bg-blue-50 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto">
                  <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-satin-chocolate mb-4 lowercase">buscando melhor desconto...</h3>
              <p className="text-satin-chocolate/60 leading-relaxed lowercase">
                estamos analisando seu perfil para liberar a melhor oferta disponível no momento.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "verificando disponibilidade",
                  "aplicando cupom especial",
                  "finalizando oferta"
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 1.2 }}
                    className="flex items-center gap-3 text-xs font-bold text-blue-600/60 lowercase"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {text}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating "O que vou aprender" Button */}
      <AnimatePresence>
        {!isModalOpen && !isDiscountSearching && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => setIsModalOpen(true)}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-black text-sm tracking-widest uppercase shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 animate-[pulse-custom_2s_infinite]"
          >
            <div className="w-2 h-2 rounded-full bg-white animate-ping" />
            o que vou aprender
          </motion.button>
        )}
      </AnimatePresence>
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
