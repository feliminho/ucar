'use client';

import { useState } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from '@/components/ui/input-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, Globe, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface DomainSearchInputProps {
  onSearch?: (fullDomain: string, extension: string) => void;
}

export function DomainSearchInput({ onSearch }: DomainSearchInputProps) {
  const [domainName, setDomainName] = useState('');
  const [extension, setExtension] = useState('.com');
  const [searchResult, setSearchResult] = useState<{
    domain: string;
    available: boolean;
    price: string;
  } | null>(null);

  const extensionPrices: Record<string, string> = {
    '.com': '₺289/yıl',
    '.com.tr': '₺149/yıl',
    '.net.tr': '₺149/yıl',
    '.net': '₺319/yıl',
    '.org': '₺349/yıl',
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainName.trim()) return;

    const cleaned = domainName
      .toLowerCase()
      .trim()
      .replace(/https?:\/\//g, '')
      .replace(/\s+/g, '')
      .replace(/\.(com|com\.tr|net\.tr|net|org)$/g, '');

    const fullDomain = `${cleaned}${extension}`;

    setSearchResult({
      domain: fullDomain,
      available: true,
      price: extensionPrices[extension] || '₺289/yıl',
    });

    if (onSearch) {
      onSearch(fullDomain, extension);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 items-stretch">
        <InputGroup className="flex-1 bg-white border-[#E5E5E5] hover:border-[#E50914] focus-within:border-[#E50914] focus-within:ring-[3px] focus-within:ring-[#E50914]/15 shadow-md transition-all rounded-2xl">
          {/* Prefix Addon */}
          <InputGroupAddon className="border-0 bg-transparent pl-4 pr-1">
            <InputGroupText className="text-[#555555] font-mono flex items-center gap-1.5 text-xs sm:text-sm">
              <Globe className="h-4 w-4 text-[#E50914]" />
              <span>https://</span>
            </InputGroupText>
          </InputGroupAddon>

          {/* Domain Input */}
          <InputGroupInput
            value={domainName}
            onChange={(e) => setDomainName(e.target.value)}
            placeholder="alanadiniz"
            className="border-0 bg-transparent pl-1 font-mono text-sm sm:text-base text-[#111111] font-semibold placeholder:text-slate-400 shadow-none outline-none focus-visible:ring-0"
          />

          {/* Suffix Select Dropdown for Extensions */}
          <InputGroupAddon align="inline-end" className="border-0 bg-transparent pr-2 pl-1">
            <Select value={extension} onValueChange={(val) => setExtension(val)}>
              <SelectTrigger className="h-9 border border-[#E5E5E5] bg-[#F9F9F9] hover:bg-red-50 hover:text-[#E50914] text-[#111111] font-mono font-bold text-xs sm:text-sm rounded-xl px-3 shadow-none focus:ring-0 transition-colors">
                <SelectValue placeholder=".com" />
              </SelectTrigger>
              <SelectContent className="bg-white border-[#E5E5E5] text-[#111111] shadow-2xl rounded-2xl">
                <SelectItem value=".com" className="font-mono text-xs hover:bg-red-50 hover:text-[#E50914] cursor-pointer">
                  .com <span className="text-[#E50914] font-bold text-[10px] ml-1">(₺289/yıl)</span>
                </SelectItem>
                <SelectItem value=".com.tr" className="font-mono text-xs hover:bg-red-50 hover:text-[#E50914] cursor-pointer">
                  .com.tr <span className="text-[#E50914] font-bold text-[10px] ml-1">(₺149/yıl)</span>
                </SelectItem>
                <SelectItem value=".net.tr" className="font-mono text-xs hover:bg-red-50 hover:text-[#E50914] cursor-pointer">
                  .net.tr <span className="text-[#E50914] font-bold text-[10px] ml-1">(₺149/yıl)</span>
                </SelectItem>
                <SelectItem value=".net" className="font-mono text-xs hover:bg-red-50 hover:text-[#E50914] cursor-pointer">
                  .net <span className="text-[#E50914] font-bold text-[10px] ml-1">(₺319/yıl)</span>
                </SelectItem>
                <SelectItem value=".org" className="font-mono text-xs hover:bg-red-50 hover:text-[#E50914] cursor-pointer">
                  .org <span className="text-[#E50914] font-bold text-[10px] ml-1">(₺349/yıl)</span>
                </SelectItem>
              </SelectContent>
            </Select>
          </InputGroupAddon>
        </InputGroup>

        {/* Submit Button */}
        <Button
          type="submit"
          className="h-12 px-8 rounded-2xl bg-[#E50914] hover:bg-[#B91C1C] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#E50914]/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Search className="h-4 w-4" />
          <span>Sorgula</span>
        </Button>
      </form>

      {/* Instant Result Box */}
      {searchResult && (
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl bg-red-50/70 border border-red-200 p-4 shadow-sm animate-in fade-in-50">
          <div className="flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-[#E50914] flex-shrink-0" />
            <div>
              <div className="font-mono font-bold text-[#111111] text-sm sm:text-base">
                {searchResult.domain} <span className="text-[#E50914] font-bold text-xs ml-2 bg-red-100 px-2 py-0.5 rounded-md">Müsait!</span>
              </div>
              <div className="text-xs text-[#555555]">
                İlk yıl özel fiyat: <span className="font-bold text-[#E50914] font-mono">{searchResult.price}</span> (Ücretsiz DNS & Whois)
              </div>
            </div>
          </div>

          <Link
            href={`/alan-adi?query=${encodeURIComponent(searchResult.domain)}`}
            className="w-full sm:w-auto rounded-xl bg-[#E50914] hover:bg-[#B91C1C] px-5 py-2.5 text-xs font-bold text-white text-center transition-all shadow-md shadow-[#E50914]/20 hover:scale-105"
          >
            Hemen Kaydet
          </Link>
        </div>
      )}
    </div>
  );
}
