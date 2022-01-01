// Typing for Debank OpenAPI
// https://openapi.debank.com/docs

export declare type ChainId = 'eth' | 'bsc' | 'xdai' | 'matic' | 'ftm' | 'okt' | 'heco' | 'avax' | 'op' | 'arb' | 'celo' | 'movr' | 'cro' | 'boba' | 'metis' | 'btt'

export declare type ProtocolId = 'bsc_bdollar' | 'bsc_bvault' | 'bsc_beefy' | 'bsc_beglobal' | 'bsc_dsgmetaverse' | 'bsc_fletaconnect' | 'bsc_pancakeswap' | 'bsc_arenaswap' | 'bsc_bakeryswap' | 'bsc_knightswap' | 'bsc_kebab' | 'bsc_singular' | 'bsc_thoreum' | 'bsc_timewarp' | 'bsc_orion' | 'bsc_venus' | 'bsc_feeder' | 'bsc_goose' | 'bsc_depth' | 'bsc_growing' | 'bsc_helmet' | 'bsc_1inch' | 'bsc_revault' | 'bsc_leonicornswap' | 'bsc_ten' | 'bsc_elk' | 'bsc_cream' | 'bsc_trustpad' | 'bsc_positionex' | 'bsc_autofarm' | 'bsc_xswap' | 'bsc_pancakebunny' | 'bsc_alpacafinance' | 'bsc_rabbitfinance' | 'bsc_qian' | 'bsc_bscstation' | 'bsc_acryptos' | 'bsc_acsi' | 'bsc_alpha' | 'bsc_dodoex' | 'bsc_ellipsis' | 'bsc_julswap' | 'bsc_pureswap' | 'bsc_belt' | 'bsc_smoothy' | 'bsc_squidstake' | 'bsc_nerve' | 'bsc_mdex' | 'bsc_klend' | 'bsc_yfv' | 'bsc_forbank' | 'bsc_badger' | 'bsc_cyclone' | 'bsc_apeswap' | 'bsc_twindex' | 'bsc_swapking' | 'bsc_marshmallowdefi' | 'bsc_wardenswap' | 'bsc_wault' | 'bsc_dopple' | 'bsc_sakeswap' | 'bsc_deerfi' | 'bsc_polkastarter' | 'bsc_fluity' | 'bsc_coinwind' | 'bsc_panther' | 'bsc_stakedao' | 'bsc_horizon' | 'bsc_bzx2' | 'bsc_privacyswap' | 'bsc_solo' | 'bsc_kalata' | 'bsc_flux' | 'bsc_wepiggy' | 'bsc_dforcelending' | 'bsc_kokomoswap' | 'bsc_bomb' | 'bsc_iron' | 'bsc_yfii' | 'bsc_biswap' | 'bsc_babyswap' | 'bsc_impossible' | 'bsc_eleven' | 'bsc_pandaswap' | 'bsc_latteswap' | 'bsc_jetswap' | 'bsc_hyfi' | 'bsc_steak_bank' | 'bsc_swamp' | 'bsc_treedefi' | 'bsc_fortress' | 'bsc_blizzard' | 'bsc_chemix' | 'bsc_pancakehunny' | 'bsc_coinswap' | 'bsc_coinswap_dex' | 'bsc_definix' | 'bsc_aperocket' | 'bsc_aperocket_v2' | 'bsc_cafeswap' | 'bsc_kalmar' | 'bsc_bunicorn' | 'bsc_cubdefi' | 'bsc_harvest' | 'bsc_tranchess' | 'bsc_openocean' | 'bsc_bxh' | 'bsc_golff' | 'bsc_dmm_exchange' | 'bsc_piggy' | 'bsc_cashcow' | 'bsc_pinecone' | 'bsc_alita' | 'bsc_burgerswap' | 'bsc_qbt' | 'bsc_bunnypark' | 'bsc_popsicle' | 'bsc_dyp' | 'bsc_honeyfarm' | 'bsc_moonpot' | 'bsc_bifi' | 'bsc_zoo' | 'bsc_channels' | 'bsc_gambit' | 'bsc_thegrandbanks' | 'bsc_synapse' | 'bsc_farmhero' | 'bsc_scientix' | 'bsc_marsecosystem' | 'bsc_hyperjump' | 'bsc_annex' | 'bsc_planetfinance' | 'bsc_insurace' | 'bsc_macaronswap' | 'bsc_yieldparrot' | 'bsc_mcdex' | 'bsc_pacoca' | 'bsc_autoshark' | 'bsc_wasabix' | 'bsc_gibxswap' | 'bsc_seeder' | 'bsc_sil' | 'bsc_ysl' | 'bsc_mushrooms' | 'bsc_gyro' | 'bsc_atlantis' | 'bsc_ocp' | 'bsc_babycake' | 'bsc_taichidao' | 'bsc_bagels' | 'bsc_mound' | 'bsc_lendhub' | 'bsc_bsc33' | 'bsc_pidao' | 'bsc_wheat' | 'bsc_sheepdex' | 'bsc_alturanft' | 'bsc_metaversepro' | 'bsc_jadeprotocol' | 'bsc_planetfinance_lending' | 'bsc_legendfantasywar' | 'bsc_seedify' | 'bsc_ola_apeswap' | 'bsc_stonedefi' | 'bsc_nemesisdao' | 'bsc_linear' | 'bsc_rabbit_dao' | 'bsc_jswap' | 'bsc_deri' | 'bsc_chargedefi' | 'bsc_unusdao' | 'bsc_parsiq' | 'aladdin' | 'alpha' | 'alpha2' | 'alchemix' | 'ankr' | 'sunrisegaming' | 'everipedia' | 'timewarp' | 'uniswap2' | 'uniswap3' | 'compound' | 'fiatdao' | 'enterdao' | 'curve' | 'pendle' | 'makerdao' | 'cream' | 'stakeborg' | 'rocketpool' | 'elk' | 'ethix' | 'orion' | 'bumper' | 'polkastarter' | 'badger' | 'yearn2' | 'yearn3' | 'harvest' | 'idle' | 'iearn' | 'liqee' | 'mars' | 'kyber' | 'aave2' | '1inch2' | 'synthetix' | 'reflexer' | 'vesper' | 'pooltogether' | 'barnbridge' | 'uma' | 'pods' | 'floatprotocol' | 'sushiswap' | 'saddle' | 'aave' | 'balancer' | 'bancor' | 'frax' | 'nexus' | 'cream2' | 'dydx' | 'keeperdao' | 'yfdai' | 'tokenlon' | 'bdp' | 'boringdao' | 'derivadex' | 'dodoex' | 'index' | 'defiswap' | 'uniswap' | 'apy' | 'stakedao' | 'qian' | 'corevault' | 'aave_amm' | 'mstable' | 'xtoken' | 'mirror' | 'smoothy' | 'fei' | 'dmm_exchange' | 'truefi' | 'dego' | 'hegic' | 'ribbon' | 'tokensets' | 'shell' | 'liquity' | 'forbank2' | 'unit' | 'cover' | 'opyn' | 'opyn2' | 'mooniswap' | 'basiscash' | 'powerpool' | 'piedao' | 'defidollar' | 'perpetual' | 'yfii' | 'yaxis' | 'acbtc' | 'bzx2' | 'wepiggy' | 'bprotocol' | 'component' | 'swerve' | 'kine' | 'rari' | 'armor' | 'balancer2' | 'integral' | 'sakeswap' | 'ruler' | 'enzyme' | 'convex' | 'unipilot' | 'pickle' | 'lido' | 'dforcelending' | 'xsigma' | 'bella' | 'cofix' | 'olympusdao' | 'olympusdao_pro' | '0x' | 'shibaswap' | 'abracadabra' | 'nft20' | 'bao' | 'shapeshift' | 'cardstarter' | 'sushiswap_lending' | 'inverse' | 'illuvium' | 'indexed' | 'stakewise' | 'instadapp' | 'thegraph' | 'mimo' | '88mph2' | 'onx' | 'openocean' | 'golff' | 'stacker' | 'tokemak' | 'volmex' | 'dopex' | 'alpha_tokenomics' | 'naos' | 'cvi' | 'lixir' | 'universexyz' | 'popsicle' | 'element' | 'dhedge' | 'nftx' | 'dyp' | 'linkpool' | 'ondo' | 'gro' | 'unfederalreserve' | 'bifi' | 'impermax' | 'deversifi' | 'synapse' | 'mushrooms' | 'betafinance' | 'crucible' | 'bridgemutual' | 'leaguedao' | 'insurace' | 'dfx' | 'akropolis' | 'cryptex' | 'wasabix' | 'mark' | 'clipper' | 'poptown' | 'maple' | 'fodl' | 'visor' | 'sil' | 'cook' | 'basket' | 'universefinance' | 'klondike' | 'temple' | 'charmfi' | 'alkemi' | 'yam' | 'squid' | 'polygon_staking' | 'snowswap' | 'meritcircle' | 'chfry' | 'angle' | 'plaza' | 'unagii' | 'umb' | 'across' | 'monox' | 'stackos' | 'paraswap' | 'duckdao' | 'dogsofelon' | 'saffron' | 'lobis' | 'ousd' | 'cerberusdao' | 'syntropynet' | 'stonedefi' | 'bobagateway' | 'paladin' | 'edennetwork' | 'heco_beefy' | 'heco_booster' | 'heco_mdex' | 'heco_depth' | 'heco_lendhub' | 'heco_bxh' | 'heco_coinwind' | 'heco_filda' | 'heco_solo' | 'heco_pippi' | 'heco_pilot' | 'heco_channels' | 'heco_belt' | 'heco_makiswap' | 'heco_dogeswap' | 'heco_hogt' | 'heco_hfione' | 'heco_back' | 'heco_wepiggy' | 'heco_yfii' | 'heco_elk' | 'heco_cocoswap' | 'heco_golff' | 'heco_autofarm' | 'heco_flux' | 'heco_newland' | 'heco_hswap' | 'heco_demeter' | 'xdai_honeyswap' | 'xdai_bao' | 'xdai_component' | 'xdai_hop' | 'xdai_curve' | 'xdai_agave' | 'xdai_elk' | 'xdai_sushiswap' | 'xdai_swapr' | 'xdai_symmetric' | 'xdai_superfluid' | 'matic_aave' | 'matic_quickswap' | 'matic_comethswap' | 'matic_polyroll' | 'matic_hop' | 'matic_dfyn' | 'matic_curve' | 'matic_smartswap' | 'matic_mstable' | 'matic_pollyfinance' | 'matic_sushiswap' | 'matic_singular' | 'matic_polywhale' | 'matic_pooltogether' | 'matic_bzx2' | 'matic_beefy' | 'matic_dodoex' | 'matic_entropyfi' | 'matic_pancakebunny' | 'matic_polycake' | 'matic_polycat' | 'matic_elk' | 'matic_mai' | 'matic_iron' | 'matic_adamant' | 'matic_sxc' | 'matic_wault' | 'matic_apeswap' | 'matic_balancer2' | 'matic_dmm_exchange' | 'matic_wepiggy' | 'matic_firebird' | 'matic_jetswap' | 'matic_cream' | 'matic_cafeswap' | 'matic_solo' | 'matic_iron2' | 'matic_polycrystal' | 'matic_dinoswap' | 'matic_stakedao' | 'matic_polypup' | 'matic_swamp' | 'matic_harvest' | 'matic_augury' | 'matic_sushiswap_lending' | 'matic_iron2_lending' | 'matic_pickle' | 'matic_pearzap' | 'matic_fortube' | 'matic_volmex' | 'matic_autofarm' | 'matic_instadapp' | 'matic_dhedge' | 'matic_eleven' | 'matic_impermax' | 'matic_synapse' | 'matic_farmhero' | 'matic_insurace' | 'matic_gravityfinance' | 'matic_wasabix' | 'matic_klimadao' | 'matic_mushrooms' | 'matic_kogefarm' | 'matic_dfx' | 'matic_badger' | 'matic_flux' | 'matic_snowswap' | 'matic_otterclam' | 'matic_relaychain' | 'matic_market' | 'matic_monox' | 'matic_yieldwolf' | 'matic_superfluid' | 'matic_thegrandbanks' | 'matic_stonedefi' | 'matic_idex3' | 'matic_tesr' | 'matic_mimo' | 'matic_jarvis' | 'ftm_pwawallet' | 'ftm_beefy' | 'ftm_curve' | 'ftm_cream' | 'ftm_liquiddriver' | 'ftm_popsicle' | 'ftm_spiritswap' | 'ftm_yearn2' | 'ftm_olive' | 'ftm_feeder' | 'ftm_dmm_exchange' | 'ftm_spookyswap' | 'ftm_sushiswap' | 'ftm_scarecrow' | 'ftm_hundred' | 'ftm_fantompup' | 'ftm_raven' | 'ftm_shade' | 'ftm_trickortreat' | 'ftm_bouje' | 'ftm_dfyn' | 'ftm_waka' | 'ftm_ester' | 'ftm_autofarm' | 'ftm_scream' | 'ftm_morpheusswap' | 'ftm_liquity' | 'ftm_swamp' | 'ftm_elk' | 'ftm_tarot' | 'ftm_reaper' | 'ftm_grim' | 'ftm_singular' | 'ftm_olympusdao_pro' | 'ftm_eleven' | 'ftm_iron2' | 'ftm_paintswap' | 'ftm_jetswap' | 'ftm_abracadabra' | 'ftm_stakesteak' | 'ftm_geist' | 'ftm_beethovenx' | 'ftm_synapse' | 'ftm_robovault' | 'ftm_soul' | 'ftm_pearzap' | 'ftm_tomb' | 'ftm_meso' | 'ftm_zoodex' | 'ftm_mai' | 'ftm_mushrooms' | 'ftm_kogefarm' | 'ftm_shibafantom' | 'ftm_exodia' | 'ftm_coffin' | 'ftm_spartacus' | 'ftm_fantohm' | 'ftm_hectordao' | 'ftm_trava' | 'ftm_yieldwolf' | 'ftm_ola_spiritswap' | 'ftm_gizadao' | 'ftm_spartacadabra' | 'ftm_summitdefi' | 'okt_aiswap' | 'okt_wepiggy' | 'okt_flux' | 'okt_sushiswap' | 'okt_kswap' | 'okt_fortube' | 'okt_sakeswap' | 'okt_cherryswap' | 'okt_acmd' | 'okt_pandaswap' | 'okt_solo' | 'okt_cocoswap' | 'okt_bxh' | 'okt_klend' | 'okt_jswap' | 'okt_eleven' | 'okt_farmhero' | 'okt_ofi' | 'okt_sil' | 'okt_cook' | 'okt_elk' | 'okt_lendhub' | 'okt_pickle' | 'avax_axial' | 'avax_beefy' | 'avax_benqi' | 'avax_baguette' | 'avax_complus' | 'avax_traderjoexyz' | 'avax_pangolin' | 'avax_lydia' | 'avax_yieldyak' | 'avax_gondola' | 'avax_swiftfinance' | 'avax_smartcoin' | 'avax_yetiswap' | 'avax_penguin' | 'avax_swamp' | 'avax_pendle' | 'avax_dmm_exchange' | 'avax_blizzard' | 'avax_singular' | 'avax_autofarm' | 'avax_elk' | 'avax_iron2' | 'avax_snowball' | 'avax_frost' | 'avax_dune_frost' | 'avax_partyswap' | 'avax_cycle' | 'avax_kuu' | 'avax_cream' | 'avax_olive' | 'avax_avalaunch' | 'avax_canary' | 'avax_curve' | 'avax_avaware' | 'avax_zero' | 'avax_xdollar' | 'avax_eleven' | 'avax_dyp' | 'avax_synapse' | 'avax_stormswap' | 'avax_vee' | 'avax_wonderland' | 'avax_hurricaneswap' | 'avax_thedragonslair' | 'avax_teddy' | 'avax_abracadabra' | 'avax_aave' | 'avax_insurace' | 'avax_traderjoexyz_lending' | 'avax_instadapp' | 'avax_alpha2' | 'avax_wheat' | 'avax_everestoptions' | 'avax_impermax' | 'avax_mai' | 'avax_orca' | 'avax_kittyfinance' | 'avax_snowbank' | 'avax_blizz' | 'avax_piggybankdao' | 'avax_stabilize' | 'avax_relaychain' | 'avax_snowdogdao' | 'avax_fortressdao' | 'avax_roco' | 'avax_yieldwolf' | 'avax_defrost' | 'avax_cook' | 'avax_talecraft' | 'avax_rugfarm' | 'avax_maximizer' | 'avax_galaxygoggle' | 'avax_icedao' | 'avax_marginswap' | 'avax_papadao' | 'avax_colonylab' | 'avax_lifedao' | 'avax_midasdao' | 'avax_olympusdao_pro' | 'avax_platypus' | 'avax_ragnarokdao' | 'avax_stakedao' | 'avax_sushiswap' | 'avax_vortexdao' | 'avax_tempodao' | 'op_uniswap3' | 'op_hop' | 'op_synthetix' | 'op_lyra' | 'op_synapse' | 'op_wepiggy' | 'op_dforcelending' | 'arb_curve' | 'arb_dforcelending' | 'arb_wepiggy' | 'arb_sushiswap' | 'arb_uniswap3' | 'arb_balancer2' | 'arb_saddle' | 'arb_swapr' | 'arb_dodoex' | 'arb_carbon' | 'arb_cream' | 'arb_sushiswap_lending' | 'arb_mcdex' | 'arb_gmx' | 'arb_dopex' | 'arb_arbog' | 'arb_hop' | 'arb_pickle' | 'arb_arbinyan' | 'arb_badger' | 'arb_magicland' | 'arb_adamant' | 'arb_beefy' | 'arb_elk' | 'arb_impermax' | 'arb_abracadabra' | 'arb_channels' | 'arb_synapse' | 'arb_hundred' | 'arb_zerotwohm' | 'arb_flux' | 'arb_dogsofelon' | 'arb_umami' | 'arb_treasure' | 'celo_autofarm' | 'celo_ubeswap' | 'celo_beefy' | 'celo_pooltogether' | 'celo_symmetric' | 'celo_sushiswap' | 'celo_celodex' | 'celo_moola' | 'celo_mobius' | 'celo_yieldwolf' | 'movr_autofarm' | 'movr_elk' | 'movr_sushiswap' | 'movr_solarbeam' | 'movr_huckleberry' | 'movr_kogefarm' | 'movr_beefy' | 'movr_relaychain' | 'movr_zenlink' | 'movr_romedao' | 'movr_thegrandbanks' | 'movr_impermax' | 'movr_fantohm' | 'movr_wepiggy' | 'cro_autofarm' | 'cro_vvs' | 'cro_elk' | 'cro_crodex' | 'cro_beefy' | 'cro_cronaswap' | 'cro_polycrystal' | 'cro_stormswap' | 'cro_dnadollar' | 'cro_fortunedao' | 'cro_photonswap' | 'cro_yieldwolf' | 'cro_annex' | 'cro_blackbird' | 'cro_mmf' | 'cro_adamant' | 'boba_oolongswap' | 'boba_synapse' | 'boba_autofarm' | 'boba_swapperchan' | 'boba_senpaiswap' | 'boba_bobagateway' | 'metis_netswap'

// "id": "eth",
// "community_id": 1,
// "name": "Ethereum",
// "logo_url": "https://static.debank.com/image/chain/logo_url/eth/6e0cd1f895af9836ee8c32cfc03bc279.png",
// "native_token_id": "eth",
// "wrapped_token_id": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
export declare type Chain = {
  id: ChainId,
  community_id: number,
  name: string,
  logo_url: string,
  native_token_id: string,
  wrapped_token_id: string,
}


// {
//   "id": "compound",
//   "chain_id": 1,
//   "name": "Compound",
//   "logo_url": "https://static.debank.com/image/project/logo_url/compound/b4b9c8de20952846a1c9dfcded47d0db.png",
//   "site_url": "https://app.compound.finance",
//   "has_supported_portfolio": true
// }
export declare type Protocol = {
  id: ProtocolId,
  chain_id: number,
  name: string,
  logo_url: string,
  site_url: string,
  has_supported_portfolio: boolean,
}

export declare type Token = {
  id: string
  chain: ChainId
  name: string
  symbol: string
  display_symbol: string | null
  optimized_symbol: string
  decimals: number
  logo_url: string | null
  protocol_id: ProtocolId
  price: number
  is_verified: boolean
  is_core: boolean
  is_wallet: boolean
  time_at: number
  amount: number
  raw_amount?: number
}

export declare type PortfolioItem = {
  stats: {
    asset_usd_value: number
    debt_usd_value: number
    net_usd_value: number
    daily_yield_usd_value: number
    daily_cost_usd_value: number
    daily_net_yield_usd_value: number
  }
  update_at: number
  name: string
  detail_types: string[]
  detail: {
    supply_token_list?: Token[],
    reward_token_list?: Token[]
  }
  proxy_detail: {}
}

export declare type ComplexProtocol = {
  id: string
  chain: ChainId
  name: string
  site_url: string
  logo_url: string | null
  has_supported_portfolio: boolean
  tvl: number
  portfolio_item_list: PortfolioItem[]
}

export declare type NFT = {
  id: string
  contract_id: string
  inner_id: string
  chain: ChainId
  name: string | null
  description: string | null
  content_type: string | null
  content: string | null
  total_supply: number
  detail_url: string
  contract_name: string
  is_erc721: boolean
  amount: number
  protocol?: Protocol
}
