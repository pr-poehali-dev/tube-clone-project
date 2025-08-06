import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portfolioItems = [
    {
      title: "Креативный дизайн №1",
      description: "Современный подход к веб-дизайну с уникальными решениями",
      category: "Web Design",
      image: "https://v3.fal.media/files/panda/WCMgDhfJFkbA85cL5ZX-1_output.png"
    },
    {
      title: "Креативный дизайн №2", 
      description: "Инновационные решения для цифровых продуктов",
      category: "UI/UX",
      image: "https://v3.fal.media/files/panda/WCMgDhfJFkbA85cL5ZX-1_output.png"
    },
    {
      title: "Креативный дизайн №3",
      description: "Брендинг и визуальная идентичность нового уровня",
      category: "Branding",
      image: "https://v3.fal.media/files/panda/WCMgDhfJFkbA85cL5ZX-1_output.png"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-sm bg-white/90 border-b transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TUBOG
            </div>
            <div className="hidden md:flex space-x-8">
              {['Главная', 'Портфолио', 'О нас', 'Контакты'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-foreground hover:text-primary transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="главная" className="pt-20 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
              Креативные
              <br />
              Решения
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Создаем уникальные цифровые продукты, которые вдохновляют и впечатляют
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:scale-105 transition-transform duration-300">
                Посмотреть работы
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform duration-300">
                Связаться с нами
              </Button>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/2 left-10 opacity-20 animate-float">
            <Icon name="Palette" size={60} className="text-primary" />
          </div>
          <div className="absolute top-1/3 right-10 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
            <Icon name="Lightbulb" size={50} className="text-secondary" />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="портфолио" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Наше <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Портфолио</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Каждый проект — это уникальная история успеха
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className={`group hover:scale-105 transition-all duration-500 cursor-pointer animate-scale-in hover:shadow-2xl overflow-hidden`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon name="ExternalLink" size={20} className="text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary rounded-full text-sm font-medium mb-3">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="о нас" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                О <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Нас</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы — команда креативных профессионалов, специализирующихся на создании 
                уникальных цифровых решений. Наша страсть к инновациям и внимание к деталям 
                помогают нам превращать идеи в выдающиеся проекты.
              </p>
              <div className="space-y-4">
                {[
                  { icon: 'Target', text: 'Фокус на результате' },
                  { icon: 'Users', text: 'Командная работа' },
                  { icon: 'Zap', text: 'Инновационный подход' }
                ].map((item, index) => (
                  <div key={index} className={`flex items-center space-x-3 animate-slide-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <Icon name={item.icon as any} size={20} className="text-white" />
                    </div>
                    <span className="text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
                <Icon name="Palette" size={120} className="text-primary/40" />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-accent to-primary rounded-full animate-float opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full animate-float opacity-60" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="контакты" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Готовы к <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Сотрудничеству?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Давайте создадим что-то невероятное вместе
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: 'Mail', title: 'Email', info: 'hello@tubog.ru' },
                { icon: 'Phone', title: 'Телефон', info: '+7 (999) 123-45-67' },
                { icon: 'MapPin', title: 'Адрес', info: 'Москва, Россия' }
              ].map((contact, index) => (
                <Card key={index} className={`p-6 hover:scale-105 transition-all duration-300 animate-scale-in hover:shadow-lg`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={contact.icon as any} size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
                  <p className="text-muted-foreground">{contact.info}</p>
                </Card>
              ))}
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Начать проект
              <Icon name="Send" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            TUBOG
          </div>
          <p className="text-gray-400 mb-6">© 2024 TUBOG. Все права защищены.</p>
          <div className="flex justify-center space-x-6">
            {['Instagram', 'Twitter', 'Linkedin'].map((social, index) => (
              <Button key={social} variant="ghost" size="sm" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Icon name={social as any} size={20} />
              </Button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;