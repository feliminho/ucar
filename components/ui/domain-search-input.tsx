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
        <InputGroup className="flex-1 bg-white border-slate-300 hover:border-[#2D9F9D] focus-within:border-[#2D9F9D] focus-within:ring-[3px] focus-within:ring-[#2D9F9D]/20 shadow-md transition-all">
          {/* Prefix Addon */}
          <InputGroupAddon className="border-0 bg-transparent pl-4 pr-1">
            <InputGroupText className="text-[#4A5568] font-mono flex items-center gap-1.5 text-xs sm:text-sm">
              <Globe className="h-4 w-4 text-[#2D9F9D]" />
              <span>https://</span>
            </InputGroupText>
          </InputGroupAddon>

          {/* Domain Input */}
          <InputGroupInput
            value={domainName}
            onChange={(e) => setDomainName(e.target.value)}
            placeholder="alanadiniz"
            className="border-0 bg-transparent pl-1 font-mono text-sm sm:text-base text-[#1A4F7C] font-semibold placeholder:text-slate-400 shadow-none outline-none focus-visible:ring-0"
          />

          {/* Suffix Select Dropdown for Extensions */}
          <InputGroupAddon align="inline-end" className="border-0 bg-transparent pr-2 pl-1">
            <Select value={extension} onValueChange={(val) => setExtension(val)}>
              <SelectTrigger className="h-8 border border-slate-200 bg-slate-50 hover:bg-slate-100 text-[#1A4F7C] font-mono font-bold text-xs sm:text-sm rounded-lg px-2.5 shadow-none focus:ring-0">
                <SelectValue placeholder=".com" />
              </SelectTrigger>
              <SelectContent className="bg-white border-slate-200 text-[#1A4F7C] shadow-xl">
                <SelectItem value=".com" className="font-mono text-xs hover:bg-slate-50 hover:text-[#2D9F9D]">
                  .com <span className="text-[#4A5568] text-[10px] ml-1">(₺289/yıl)</span>
                </SelectItem>
                <SelectItem value=".com.tr" className="font-mono text-xs hover:bg-slate-50 hover:text-[#2D9F9D]">
                  .com.tr <span className="text-[#4A5568] text-[10px] ml-1">(₺149/yıl)</span>
                </SelectItem>
                <SelectItem value=".net.tr" className="font-mono text-xs hover:bg-slate-50 hover:text-[#2D9F9D]">
                  .net.tr <span className="text-[#4A5568] text-[10px] ml-1">(₺149/yıl)</span>
                </SelectItem>
                <SelectItem value=".net" className="font-mono text-xs hover:bg-slate-50 hover:text-[#2D9F9D]">
                  .net <span className="text-[#4A5568] text-[10px] ml-1">(₺319/yıl)</span>
                </SelectItem>
                <SelectItem value=".org" className="font-mono text-xs hover:bg-slate-50 hover:text-[#2D9F9D]">
                  .org <span className="text-[#4A5568] text-[10px] ml-1">(₺349/yıl)</span>
                </SelectItem>
              </SelectContent>
            </Select>
          </InputGroupAddon>
        </InputGroup>

        {/* Submit Button */}
        <Button
          type="submit"
          className="h-12 px-8 rounded-xl bg-gradient-to-r from-[#1A4F7C] to-[#2D9F9D] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#1A4F7C]/20 hover:scale-[1.02] hover:shadow-[#1A4F7C]/30 transition-all flex items-center justify-center gap-2"
        >
          <Search className="h-4 w-4 text-[#6EDCD7]" />
          <span>Sorgula</span>
        </Button>
      </form>

      {/* Instant Result Box */}
      {searchResult && (
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl bg-[#F0FDFA] border border-[#2D9F9D]/40 p-4 shadow-sm animate-in fade-in-50">
          <div className="flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-[#2D9F9D] flex-shrink-0" />
            <div>
              <div className="font-mono font-bold text-[#1A4F7C] text-sm sm:text-base">
                {searchResult.domain} <span className="text-[#2D9F9D] font-bold text-xs ml-2">Müsait!</span>
              </div>
              <div className="text-xs text-[#4A5568]">
                İlk yıl özel fiyat: <span className="font-bold text-[#1A4F7C]">{searchResult.price}</span> (Ücretsiz DNS & Whois)
              </div>
            </div>
          </div>

          <Link
            href={`/alan-adi/sorgulama?domain=${encodeURIComponent(searchResult.domain)}`}
            className="w-full sm:w-auto rounded-xl bg-[#2D9F9D] hover:bg-[#1A4F7C] px-5 py-2.5 text-xs font-bold text-white text-center transition-all shadow-sm"
          >
            Hemen Kaydet
          </Link>
        </div>
      )}
    </div>
  );
}
